---
title: VCS (PlatformIO Advanced Scripting)
date: "16-04-2022"
published: true

tile:
  type: image
  image: /tiles/2022-04-16-VCS.PNG
---

<script>
    import CopyButton from "@bojit/svelte-components/widgets/CodeEditor/CopyButton.svelte";

    import "prismjs/prism.js";
    import "prismjs/components/prism-bash.js";
    import "prismjs/components/prism-c.js";
    import "prismjs/components/prism-python.js";
    import "prismjs/components/prism-json.js";
</script>

`VCS` *(Version Control System)* is a simple script that works with the `PlatformIO` build system to add useful metadata to the output binaries of embedded projects. The exact workings of the tool are documented on [GitHub](https://github.com/BOJIT/VCS), so I won't dive into detail here. This article focuses more on the internals of the library and some of the cool things you can do with the scripting engine.

![VCS Tile]({import.meta.env.VITE_IMAGE_BASE}/tiles/2022-04-16-VCS.PNG)

PlatformIO is built on `Python`. Any valid `Python` can be executed in the context of the build environment, and if you are somewhat familiar with the `SCons` build environment that `PlatformIO` uses, then you can pretty much mess with any part of the `C/C++` build process!

The [`PlatformIO` docs](https://docs.platformio.org/en/latest/scripting/index.html) give a thorough breakdown of the `SCons` API, but it is quite light on real-life examples.

Below are a few examples of useful things that the PlatformIO scripting API can help you do:

### Automated Upstream Library Configuration

The `SCons` build system allows the source and include paths to be edited programatically. I have used this in the past to configure libraries pulled directly from an upstream source. `FreeRTOS` is a good example of where this is useful. To use the library directly, you need to choose a target architecture `port.c` file, choose a memory management scheme, and configure some basic options.

In the scripting API you have access to all of your platform build variables, so it makes easy to configure these options automatically based on your target environment. An example of that could be:

<CopyButton />

```python
# Get predefined C macro (could be defined by build system or .ini file)
for item in env.get("CPPDEFINES", []):
    if isinstance(item, tuple):
        if item[0] == 'PORT_TYPE':
            port_type = item[1]

# Configure source and include paths based on this macro
env.Append(CPPPATH=[os.path.realpath("FreeRTOS-Kernel/include")])
env.Append(CPPPATH=[os.path.realpath(os.path.join("FreeRTOS-Kernel/portable/GCC/", port_type))])
env.Replace(SRC_FILTER=[
        "+<FreeRTOS-Kernel/>",
        "-<FreeRTOS-Kernel/portable/>",
        "+<FreeRTOS-Kernel/portable/MemMang/heap_4.c>",
        os.path.join("+<FreeRTOS-Kernel/portable/GCC/", port_type, ">")
    ])
```

A more complete example of this behaviour is shown in my `PlatformIO-FreeRTOS` [library](https://github.com/BOJIT/PlatformIO-FreeRTOS).

### Tagged Version Fetching

PlatformIO does have built-in support for fetching Git repositories, but this only works if that repository is in the default library format or contains a `library.json` file. With the advanced scripting engine you can fetch the library on-the-fly and modify it.

I have used the `GitPython` package in the past. It allows you to fetch and manage Git repositories programatically. Two functions I use extensively are:

<CopyButton />

```python
def getRemoteTags(url):
    g = git.cmd.Git()
    blob = g.ls_remote(url, sort='-v:refname', tags=True, refs=True)
    entries = blob.split('\n')
    return list(map(lambda x: x.partition('refs/tags/')[2], entries))

def getLocalTag(path):
    g = git.Repo(path)
    return [str(next((tag for tag in g.tags if tag.commit == g.head.commit), None))]
    pass
```

This is handy for some automated library work, but where it really shines is in a corporate environment. Many teams at work have trouble keeping certain build data/settings synchronised across projects. Adding a `lib-build.py` to our default project template effectively 'forces' team members to keep certain dependencies up to date!

### Asset Bundling

Projects involving UI and IoT often involve assets that cannot be natively compiled by a C compiler. Examples include UI Images and FileSystem data for web servers. There exist [tools](https://lvgl.io/tools/imageconverter) to do this sort of thing, but they are mostly web-based or use ancient scripting languages like *perl*. These assets are also tricky to incorporate into CI/CD toolchains, meaning *compiled* assets often just get left in source control. A nice alternative would be to have these assets treated as part of the compilation framework, similar to how web bundlers work.

### Certificate Management and Authentication

IoT projects typically require API keys, certificates, MAC addresses and other product-specific information embedded in the firmware. In industry specialised tools exist to modify binaries when programming devices on a production line. This is impractical for most hobbyists, but for small production runs have a slightly more automated firmware build system is probably desirable.

## Tips and Tricks

There are a few parts of the scripting API that initially caught me out.

The first of these is importing Third-Party `python` packages when in the build environment. Packages must be installed within PlatformIO's own python virtual environment: this can be done from within the build script with the following snippet:

<CopyButton />

```python
try:
    import example
except ImportError:
    env.Execute("$PYTHONEXE -m pip install example")
    import example

```

The second 'Gotcha' is the understanding of build scope from within libraries.

When using scripting from the main `platformio.ini` file, we are modifying the build environment of our main codebase: Aside from build_flags these changes do not propogate down to our libraries. Likewise, when calling build scripts from within `library.json`, we are modifying the build environment of that library, not the whole project.

This can be a bit confusing when it comes to global config files. Projects such as `lwIP`, `freeRTOS` and `lvgl` use global config files that must be added to your project. However, by default, your project include paths are not passed to libraries when they are complied. A simple workaround is to use the scripting API to add the root include directory to your libary build:

<CopyButton />

```python
# This script snippet works from any build context!
env.Append(CPPPATH=env.get("PROJECT_INCLUDE_DIR", []))
```

The final tip is to run your builds using the `-v` *(verbose)* flag when writing scripts. Ultimately all `SCons` is doing is deciding what needs to be recompiled and passing the appropriate flags to `gcc`.

Anyway... I've got sidetracked... back to the library!

## VCS Usage

The library doesn't really require any interaction: all you need to do to activate it is add the library your `platformio.ini` file and the rest is handled automatically.

The library generates the following entry as a global C-struct

<CopyButton />

```c
const vcs_t vcs = {
    {0xFF, 0xFE, 0xFD, 0xFC},   /* frame_start */
    1,                          /* schema */
    __VCS_COMPILE_TIME,         /* compile_time */
    __VCS_SHORT_HASH,           /* short_hash */
    __VCS_IS_DIRTY,             /* is_dirty */
    __VCS_TAG_DESCRIBE,         /* tag_describe */
    __VCS_LAST_AUTHOR,          /* author */
    {0x01, 0x02, 0x03, 0x04}    /* frame_end */
};
```

An example output for a typical compilation may look something like this:

<CopyButton />

```json
{
    "schema": 1,
    "compile_time": "2022-01-13T12:03Z",
    "short_hash": "293b1c5",
    "is_dirty": true,
    "tag_describe": "1.0.0-2-g293b1c5",
    "last_author": "James Bennion-Pedley"
}
```

You can access the `vcs` struct anywhere you include the header, so the output can be used in your program.

## Checking Versions

Looking through binaries for an embedded bit of metadata is tedious. Ideally I would have liked to place the metadata at the start or end of the firmware binary, but doing this would involve programatically editing the linker file, which just seems like asking for trouble.



Instead, the library includes a simple python script that searches for a 'magic pattern' that signifies the fixed-size metadata block.

simply get your binary file, download the script and run the following python command:

<CopyButton />

```bash
$ get_vcs.py ./PATH/TO-FIRMWARE.bin
# OR
$ python3 get_vcs.py ./PATH/TO-FIRMWARE.bin

# Pass the 'clean' flag for just VCS output (scripting)
$ get_vcs.py --clean ./PATH/TO-FIRMWARE.bin > something_else

```

This will return you the metadata in `JSON` format.

This library was an excellent excuse to play about with the python scripting capabilities of `PlatformIO`. Hopefully someone else finds it useful too!
