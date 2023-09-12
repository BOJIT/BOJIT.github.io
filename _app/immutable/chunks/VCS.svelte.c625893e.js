import{s as Wn,f as a,a as p,N as X,g as o,K as i,c as l,h as Q,O as tt,d as n,j as nt,i as s,v as Zt}from"./scheduler.4ddb5076.js";import{S as Yn,i as Zn}from"./index.9cd1e3e1.js";import"./IconButton.b0f3f37a.js";import"./prism-bash.575d1a7e.js";import"./prism-c.baf0302e.js";Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;function Xn(zn){let c,Xt='<code>VCS</code> <em>(Version Control System)</em> is a simple script that works with the <code>PlatformIO</code> build system to add useful metadata to the output binaries of embedded projects. The exact workings of the tool are documented on <a href="https://github.com/BOJIT/VCS" rel="nofollow">GitHub</a>, so I won’t dive into detail here. This article focuses more on the internals of the library and some of the cool things you can do with the scripting engine.',et,u,Qt='<img src="https://cdn.bojit.org/img/tiles/2022-04-16-VCS.PNG" alt="VCS Tile"/>',st,r,tn="PlatformIO is built on <code>Python</code>. Any valid <code>Python</code> can be executed in the context of the build environment, and if you are somewhat familiar with the <code>SCons</code> build environment that <code>PlatformIO</code> uses, then you can pretty much mess with any part of the <code>C/C++</code> build process!",at,d,nn='The <a href="https://docs.platformio.org/en/latest/scripting/index.html" rel="nofollow"><code>PlatformIO</code> docs</a> give a thorough breakdown of the <code>SCons</code> API, but it is quite light on real-life examples.',ot,k,en="Below are a few examples of useful things that the PlatformIO scripting API can help you do:",pt,m,sn="Automated Upstream Library Configuration",lt,h,an="The <code>SCons</code> build system allows the source and include paths to be edited programatically. I have used this in the past to configure libraries pulled directly from an upstream source. <code>FreeRTOS</code> is a good example of where this is useful. To use the library directly, you need to choose a target architecture <code>port.c</code> file, choose a memory management scheme, and configure some basic options.",it,f,on="In the scripting API you have access to all of your platform build variables, so it makes easy to configure these options automatically based on your target environment. An example of that could be:",ct,b,ut,Nn=`<code class="language-python"><span class="token comment"># Get predefined C macro (could be defined by build system or .ini file)</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> env<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"CPPDEFINES"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token builtin">tuple</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'PORT_TYPE'</span><span class="token punctuation">:</span>
            port_type <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment"># Configure source and include paths based on this macro</span>
env<span class="token punctuation">.</span>Append<span class="token punctuation">(</span>CPPPATH<span class="token operator">=</span><span class="token punctuation">[</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>realpath<span class="token punctuation">(</span><span class="token string">"FreeRTOS-Kernel/include"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>Append<span class="token punctuation">(</span>CPPPATH<span class="token operator">=</span><span class="token punctuation">[</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>realpath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">"FreeRTOS-Kernel/portable/GCC/"</span><span class="token punctuation">,</span> port_type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>Replace<span class="token punctuation">(</span>SRC_FILTER<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">"+&lt;FreeRTOS-Kernel/>"</span><span class="token punctuation">,</span>
        <span class="token string">"-&lt;FreeRTOS-Kernel/portable/>"</span><span class="token punctuation">,</span>
        <span class="token string">"+&lt;FreeRTOS-Kernel/portable/MemMang/heap_4.c>"</span><span class="token punctuation">,</span>
        os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">"+&lt;FreeRTOS-Kernel/portable/GCC/"</span><span class="token punctuation">,</span> port_type<span class="token punctuation">,</span> <span class="token string">">"</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span></code>`,rt,y,pn='A more complete example of this behaviour is shown in my <code>PlatformIO-FreeRTOS</code> <a href="https://github.com/BOJIT/PlatformIO-FreeRTOS" rel="nofollow">library</a>.',dt,v,ln="Tagged Version Fetching",kt,g,cn="PlatformIO does have built-in support for fetching Git repositories, but this only works if that repository is in the default library format or contains a <code>library.json</code> file. With the advanced scripting engine you can fetch the library on-the-fly and modify it.",mt,_,un="I have used the <code>GitPython</code> package in the past. It allows you to fetch and manage Git repositories programatically. Two functions I use extensively are:",ht,x,ft,$n=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">getRemoteTags</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    g <span class="token operator">=</span> git<span class="token punctuation">.</span>cmd<span class="token punctuation">.</span>Git<span class="token punctuation">(</span><span class="token punctuation">)</span>
    blob <span class="token operator">=</span> g<span class="token punctuation">.</span>ls_remote<span class="token punctuation">(</span>url<span class="token punctuation">,</span> sort<span class="token operator">=</span><span class="token string">'-v:refname'</span><span class="token punctuation">,</span> tags<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> refs<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    entries <span class="token operator">=</span> blob<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'&#92;n'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>partition<span class="token punctuation">(</span><span class="token string">'refs/tags/'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> entries<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">getLocalTag</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    g <span class="token operator">=</span> git<span class="token punctuation">.</span>Repo<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tag <span class="token keyword">for</span> tag <span class="token keyword">in</span> g<span class="token punctuation">.</span>tags <span class="token keyword">if</span> tag<span class="token punctuation">.</span>commit <span class="token operator">==</span> g<span class="token punctuation">.</span>head<span class="token punctuation">.</span>commit<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">pass</span></code>`,bt,w,rn="This is handy for some automated library work, but where it really shines is in a corporate environment. Many teams at work have trouble keeping certain build data/settings synchronised across projects. Adding a <code>lib-build.py</code> to our default project template effectively ‘forces’ team members to keep certain dependencies up to date!",yt,C,dn="Asset Bundling",vt,T,kn='Projects involving UI and IoT often involve assets that cannot be natively compiled by a C compiler. Examples include UI Images and FileSystem data for web servers. There exist <a href="https://lvgl.io/tools/imageconverter" rel="nofollow">tools</a> to do this sort of thing, but they are mostly web-based or use ancient scripting languages like <em>perl</em>. These assets are also tricky to incorporate into CI/CD toolchains, meaning <em>compiled</em> assets often just get left in source control. A nice alternative would be to have these assets treated as part of the compilation framework, similar to how web bundlers work.',gt,P,mn="Certificate Management and Authentication",_t,H,hn="IoT projects typically require API keys, certificates, MAC addresses and other product-specific information embedded in the firmware. In industry specialised tools exist to modify binaries when programming devices on a production line. This is impractical for most hobbyists, but for small production runs have a slightly more automated firmware build system is probably desirable.",xt,I,fn="Tips and Tricks",wt,M,bn="There are a few parts of the scripting API that initially caught me out.",Ct,S,yn="The first of these is importing Third-Party <code>python</code> packages when in the build environment. Packages must be installed within PlatformIO’s own python virtual environment: this can be done from within the build script with the following snippet:",Tt,L,Pt,Bn=`<code class="language-python"><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> example
<span class="token keyword">except</span> ImportError<span class="token punctuation">:</span>
    env<span class="token punctuation">.</span>Execute<span class="token punctuation">(</span><span class="token string">"$PYTHONEXE -m pip install example"</span><span class="token punctuation">)</span>
    <span class="token keyword">import</span> example
</code>`,Ht,A,vn="The second ‘Gotcha’ is the understanding of build scope from within libraries.",It,R,gn="When using scripting from the main <code>platformio.ini</code> file, we are modifying the build environment of our main codebase: Aside from build_flags these changes do not propogate down to our libraries. Likewise, when calling build scripts from within <code>library.json</code>, we are modifying the build environment of that library, not the whole project.",Mt,O,_n="This can be a bit confusing when it comes to global config files. Projects such as <code>lwIP</code>, <code>freeRTOS</code> and <code>lvgl</code> use global config files that must be added to your project. However, by default, your project include paths are not passed to libraries when they are complied. A simple workaround is to use the scripting API to add the root include directory to your libary build:",St,E,Lt,Dn=`<code class="language-python"><span class="token comment"># This script snippet works from any build context!</span>
env<span class="token punctuation">.</span>Append<span class="token punctuation">(</span>CPPPATH<span class="token operator">=</span>env<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"PROJECT_INCLUDE_DIR"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,At,j,xn="The final tip is to run your builds using the <code>-v</code> <em>(verbose)</em> flag when writing scripts. Ultimately all <code>SCons</code> is doing is deciding what needs to be recompiled and passing the appropriate flags to <code>gcc</code>.",Rt,F,wn="Anyway… I’ve got sidetracked… back to the library!",Ot,V,Cn="VCS Usage",Et,G,Tn="The library doesn’t really require any interaction: all you need to do to activate it is add the library your <code>platformio.ini</code> file and the rest is handled automatically.",jt,q,Pn="The library generates the following entry as a global C-struct",Ft,z,Vt,Kn=`<code class="language-c"><span class="token keyword">const</span> <span class="token class-name">vcs_t</span> vcs <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token punctuation">&#123;</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0xFE</span><span class="token punctuation">,</span> <span class="token number">0xFD</span><span class="token punctuation">,</span> <span class="token number">0xFC</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>   <span class="token comment">/* frame_start */</span>
    <span class="token number">1</span><span class="token punctuation">,</span>                          <span class="token comment">/* schema */</span>
    __VCS_COMPILE_TIME<span class="token punctuation">,</span>         <span class="token comment">/* compile_time */</span>
    __VCS_SHORT_HASH<span class="token punctuation">,</span>           <span class="token comment">/* short_hash */</span>
    __VCS_IS_DIRTY<span class="token punctuation">,</span>             <span class="token comment">/* is_dirty */</span>
    __VCS_TAG_DESCRIBE<span class="token punctuation">,</span>         <span class="token comment">/* tag_describe */</span>
    __VCS_LAST_AUTHOR<span class="token punctuation">,</span>          <span class="token comment">/* author */</span>
    <span class="token punctuation">&#123;</span><span class="token number">0x01</span><span class="token punctuation">,</span> <span class="token number">0x02</span><span class="token punctuation">,</span> <span class="token number">0x03</span><span class="token punctuation">,</span> <span class="token number">0x04</span><span class="token punctuation">&#125;</span>    <span class="token comment">/* frame_end */</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,Gt,N,Hn="An example output for a typical compilation may look something like this:",qt,$,zt,Un=`<code class="language-json"><span class="token punctuation">&#123;</span>
    <span class="token property">"schema"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"compile_time"</span><span class="token operator">:</span> <span class="token string">"2022-01-13T12:03Z"</span><span class="token punctuation">,</span>
    <span class="token property">"short_hash"</span><span class="token operator">:</span> <span class="token string">"293b1c5"</span><span class="token punctuation">,</span>
    <span class="token property">"is_dirty"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"tag_describe"</span><span class="token operator">:</span> <span class="token string">"1.0.0-2-g293b1c5"</span><span class="token punctuation">,</span>
    <span class="token property">"last_author"</span><span class="token operator">:</span> <span class="token string">"James Bennion-Pedley"</span>
<span class="token punctuation">&#125;</span></code>`,Nt,B,In="You can access the <code>vcs</code> struct anywhere you include the header, so the output can be used in your program.",$t,D,Mn="Checking Versions",Bt,K,Sn="Looking through binaries for an embedded bit of metadata is tedious. Ideally I would have liked to place the metadata at the start or end of the firmware binary, but doing this would involve programatically editing the linker file, which just seems like asking for trouble.",Dt,U,Ln="Instead, the library includes a simple python script that searches for a ‘magic pattern’ that signifies the fixed-size metadata block.",Kt,J,An="simply get your binary file, download the script and run the following python command:",Ut,W,Jt,Jn=`<code class="language-bash">$ get_vcs.py ./<span class="token environment constant">PATH</span>/TO-FIRMWARE.bin
<span class="token comment"># OR</span>
$ python3 get_vcs.py ./<span class="token environment constant">PATH</span>/TO-FIRMWARE.bin

<span class="token comment"># Pass the 'clean' flag for just VCS output (scripting)</span>
$ get_vcs.py <span class="token parameter variable">--clean</span> ./<span class="token environment constant">PATH</span>/TO-FIRMWARE.bin <span class="token operator">></span> something_else
</code>`,Wt,Y,Rn="This will return you the metadata in <code>JSON</code> format.",Yt,Z,On="This library was an excellent excuse to play about with the python scripting capabilities of <code>PlatformIO</code>. Hopefully someone else finds it useful too!";return{c(){c=a("p"),c.innerHTML=Xt,et=p(),u=a("p"),u.innerHTML=Qt,st=p(),r=a("p"),r.innerHTML=tn,at=p(),d=a("p"),d.innerHTML=nn,ot=p(),k=a("p"),k.textContent=en,pt=p(),m=a("h3"),m.textContent=sn,lt=p(),h=a("p"),h.innerHTML=an,it=p(),f=a("p"),f.textContent=on,ct=p(),b=a("pre"),ut=new X(!1),rt=p(),y=a("p"),y.innerHTML=pn,dt=p(),v=a("h3"),v.textContent=ln,kt=p(),g=a("p"),g.innerHTML=cn,mt=p(),_=a("p"),_.innerHTML=un,ht=p(),x=a("pre"),ft=new X(!1),bt=p(),w=a("p"),w.innerHTML=rn,yt=p(),C=a("h3"),C.textContent=dn,vt=p(),T=a("p"),T.innerHTML=kn,gt=p(),P=a("h3"),P.textContent=mn,_t=p(),H=a("p"),H.textContent=hn,xt=p(),I=a("h2"),I.textContent=fn,wt=p(),M=a("p"),M.textContent=bn,Ct=p(),S=a("p"),S.innerHTML=yn,Tt=p(),L=a("pre"),Pt=new X(!1),Ht=p(),A=a("p"),A.textContent=vn,It=p(),R=a("p"),R.innerHTML=gn,Mt=p(),O=a("p"),O.innerHTML=_n,St=p(),E=a("pre"),Lt=new X(!1),At=p(),j=a("p"),j.innerHTML=xn,Rt=p(),F=a("p"),F.textContent=wn,Ot=p(),V=a("h2"),V.textContent=Cn,Et=p(),G=a("p"),G.innerHTML=Tn,jt=p(),q=a("p"),q.textContent=Pn,Ft=p(),z=a("pre"),Vt=new X(!1),Gt=p(),N=a("p"),N.textContent=Hn,qt=p(),$=a("pre"),zt=new X(!1),Nt=p(),B=a("p"),B.innerHTML=In,$t=p(),D=a("h2"),D.textContent=Mn,Bt=p(),K=a("p"),K.textContent=Sn,Dt=p(),U=a("p"),U.textContent=Ln,Kt=p(),J=a("p"),J.textContent=An,Ut=p(),W=a("pre"),Jt=new X(!1),Wt=p(),Y=a("p"),Y.innerHTML=Rn,Yt=p(),Z=a("p"),Z.innerHTML=On,this.h()},l(t){c=o(t,"P",{"data-svelte-h":!0}),i(c)!=="svelte-xh8ytw"&&(c.innerHTML=Xt),et=l(t),u=o(t,"P",{"data-svelte-h":!0}),i(u)!=="svelte-fl1e15"&&(u.innerHTML=Qt),st=l(t),r=o(t,"P",{"data-svelte-h":!0}),i(r)!=="svelte-19w9qbc"&&(r.innerHTML=tn),at=l(t),d=o(t,"P",{"data-svelte-h":!0}),i(d)!=="svelte-2szn2v"&&(d.innerHTML=nn),ot=l(t),k=o(t,"P",{"data-svelte-h":!0}),i(k)!=="svelte-1cp8eqs"&&(k.textContent=en),pt=l(t),m=o(t,"H3",{"data-svelte-h":!0}),i(m)!=="svelte-o2ok36"&&(m.textContent=sn),lt=l(t),h=o(t,"P",{"data-svelte-h":!0}),i(h)!=="svelte-127ia77"&&(h.innerHTML=an),it=l(t),f=o(t,"P",{"data-svelte-h":!0}),i(f)!=="svelte-1nu6hw9"&&(f.textContent=on),ct=l(t),b=o(t,"PRE",{class:!0});var e=Q(b);ut=tt(e,!1),e.forEach(n),rt=l(t),y=o(t,"P",{"data-svelte-h":!0}),i(y)!=="svelte-1mkgrmh"&&(y.innerHTML=pn),dt=l(t),v=o(t,"H3",{"data-svelte-h":!0}),i(v)!=="svelte-5c97ee"&&(v.textContent=ln),kt=l(t),g=o(t,"P",{"data-svelte-h":!0}),i(g)!=="svelte-1dwsi0l"&&(g.innerHTML=cn),mt=l(t),_=o(t,"P",{"data-svelte-h":!0}),i(_)!=="svelte-qxldsp"&&(_.innerHTML=un),ht=l(t),x=o(t,"PRE",{class:!0});var En=Q(x);ft=tt(En,!1),En.forEach(n),bt=l(t),w=o(t,"P",{"data-svelte-h":!0}),i(w)!=="svelte-x75s9o"&&(w.innerHTML=rn),yt=l(t),C=o(t,"H3",{"data-svelte-h":!0}),i(C)!=="svelte-1o4dls3"&&(C.textContent=dn),vt=l(t),T=o(t,"P",{"data-svelte-h":!0}),i(T)!=="svelte-18i5xrg"&&(T.innerHTML=kn),gt=l(t),P=o(t,"H3",{"data-svelte-h":!0}),i(P)!=="svelte-9qfshh"&&(P.textContent=mn),_t=l(t),H=o(t,"P",{"data-svelte-h":!0}),i(H)!=="svelte-lwdhcb"&&(H.textContent=hn),xt=l(t),I=o(t,"H2",{"data-svelte-h":!0}),i(I)!=="svelte-1nz0j6t"&&(I.textContent=fn),wt=l(t),M=o(t,"P",{"data-svelte-h":!0}),i(M)!=="svelte-bpco5c"&&(M.textContent=bn),Ct=l(t),S=o(t,"P",{"data-svelte-h":!0}),i(S)!=="svelte-1oux69t"&&(S.innerHTML=yn),Tt=l(t),L=o(t,"PRE",{class:!0});var jn=Q(L);Pt=tt(jn,!1),jn.forEach(n),Ht=l(t),A=o(t,"P",{"data-svelte-h":!0}),i(A)!=="svelte-ovtf4g"&&(A.textContent=vn),It=l(t),R=o(t,"P",{"data-svelte-h":!0}),i(R)!=="svelte-s1y5zj"&&(R.innerHTML=gn),Mt=l(t),O=o(t,"P",{"data-svelte-h":!0}),i(O)!=="svelte-1vwxlb5"&&(O.innerHTML=_n),St=l(t),E=o(t,"PRE",{class:!0});var Fn=Q(E);Lt=tt(Fn,!1),Fn.forEach(n),At=l(t),j=o(t,"P",{"data-svelte-h":!0}),i(j)!=="svelte-g01lcu"&&(j.innerHTML=xn),Rt=l(t),F=o(t,"P",{"data-svelte-h":!0}),i(F)!=="svelte-732m0w"&&(F.textContent=wn),Ot=l(t),V=o(t,"H2",{"data-svelte-h":!0}),i(V)!=="svelte-ty1a5r"&&(V.textContent=Cn),Et=l(t),G=o(t,"P",{"data-svelte-h":!0}),i(G)!=="svelte-uja5ui"&&(G.innerHTML=Tn),jt=l(t),q=o(t,"P",{"data-svelte-h":!0}),i(q)!=="svelte-xmus7p"&&(q.textContent=Pn),Ft=l(t),z=o(t,"PRE",{class:!0});var Vn=Q(z);Vt=tt(Vn,!1),Vn.forEach(n),Gt=l(t),N=o(t,"P",{"data-svelte-h":!0}),i(N)!=="svelte-12i8elg"&&(N.textContent=Hn),qt=l(t),$=o(t,"PRE",{class:!0});var Gn=Q($);zt=tt(Gn,!1),Gn.forEach(n),Nt=l(t),B=o(t,"P",{"data-svelte-h":!0}),i(B)!=="svelte-t2nwxi"&&(B.innerHTML=In),$t=l(t),D=o(t,"H2",{"data-svelte-h":!0}),i(D)!=="svelte-643qi9"&&(D.textContent=Mn),Bt=l(t),K=o(t,"P",{"data-svelte-h":!0}),i(K)!=="svelte-zzmhmj"&&(K.textContent=Sn),Dt=l(t),U=o(t,"P",{"data-svelte-h":!0}),i(U)!=="svelte-4vws25"&&(U.textContent=Ln),Kt=l(t),J=o(t,"P",{"data-svelte-h":!0}),i(J)!=="svelte-1ypcg5j"&&(J.textContent=An),Ut=l(t),W=o(t,"PRE",{class:!0});var qn=Q(W);Jt=tt(qn,!1),qn.forEach(n),Wt=l(t),Y=o(t,"P",{"data-svelte-h":!0}),i(Y)!=="svelte-vdmn1a"&&(Y.innerHTML=Rn),Yt=l(t),Z=o(t,"P",{"data-svelte-h":!0}),i(Z)!=="svelte-4v4v5a"&&(Z.innerHTML=On),this.h()},h(){ut.a=null,nt(b,"class","language-python"),ft.a=null,nt(x,"class","language-python"),Pt.a=null,nt(L,"class","language-python"),Lt.a=null,nt(E,"class","language-python"),Vt.a=null,nt(z,"class","language-c"),zt.a=null,nt($,"class","language-json"),Jt.a=null,nt(W,"class","language-bash")},m(t,e){s(t,c,e),s(t,et,e),s(t,u,e),s(t,st,e),s(t,r,e),s(t,at,e),s(t,d,e),s(t,ot,e),s(t,k,e),s(t,pt,e),s(t,m,e),s(t,lt,e),s(t,h,e),s(t,it,e),s(t,f,e),s(t,ct,e),s(t,b,e),ut.m(Nn,b),s(t,rt,e),s(t,y,e),s(t,dt,e),s(t,v,e),s(t,kt,e),s(t,g,e),s(t,mt,e),s(t,_,e),s(t,ht,e),s(t,x,e),ft.m($n,x),s(t,bt,e),s(t,w,e),s(t,yt,e),s(t,C,e),s(t,vt,e),s(t,T,e),s(t,gt,e),s(t,P,e),s(t,_t,e),s(t,H,e),s(t,xt,e),s(t,I,e),s(t,wt,e),s(t,M,e),s(t,Ct,e),s(t,S,e),s(t,Tt,e),s(t,L,e),Pt.m(Bn,L),s(t,Ht,e),s(t,A,e),s(t,It,e),s(t,R,e),s(t,Mt,e),s(t,O,e),s(t,St,e),s(t,E,e),Lt.m(Dn,E),s(t,At,e),s(t,j,e),s(t,Rt,e),s(t,F,e),s(t,Ot,e),s(t,V,e),s(t,Et,e),s(t,G,e),s(t,jt,e),s(t,q,e),s(t,Ft,e),s(t,z,e),Vt.m(Kn,z),s(t,Gt,e),s(t,N,e),s(t,qt,e),s(t,$,e),zt.m(Un,$),s(t,Nt,e),s(t,B,e),s(t,$t,e),s(t,D,e),s(t,Bt,e),s(t,K,e),s(t,Dt,e),s(t,U,e),s(t,Kt,e),s(t,J,e),s(t,Ut,e),s(t,W,e),Jt.m(Jn,W),s(t,Wt,e),s(t,Y,e),s(t,Yt,e),s(t,Z,e)},p:Zt,i:Zt,o:Zt,d(t){t&&(n(c),n(et),n(u),n(st),n(r),n(at),n(d),n(ot),n(k),n(pt),n(m),n(lt),n(h),n(it),n(f),n(ct),n(b),n(rt),n(y),n(dt),n(v),n(kt),n(g),n(mt),n(_),n(ht),n(x),n(bt),n(w),n(yt),n(C),n(vt),n(T),n(gt),n(P),n(_t),n(H),n(xt),n(I),n(wt),n(M),n(Ct),n(S),n(Tt),n(L),n(Ht),n(A),n(It),n(R),n(Mt),n(O),n(St),n(E),n(At),n(j),n(Rt),n(F),n(Ot),n(V),n(Et),n(G),n(jt),n(q),n(Ft),n(z),n(Gt),n(N),n(qt),n($),n(Nt),n(B),n($t),n(D),n(Bt),n(K),n(Dt),n(U),n(Kt),n(J),n(Ut),n(W),n(Wt),n(Y),n(Yt),n(Z))}}}const ae={title:"VCS (PlatformIO Advanced Scripting)",date:"16-04-2022",published:!0,tile:{type:"image",image:"/tiles/2022-04-16-VCS.PNG"}};class oe extends Yn{constructor(c){super(),Zn(this,c,null,Xn,Wn,{})}}export{oe as default,ae as metadata};
