---
title: KinectIP
date: "24-07-2019"
published: true
hidden: false

tile:
  type: image
  image: /tiles/2019-07-24-KinectIP.PNG
---

> I only remembered about this project 4 years later when clearing through some old boxes, so apologies if details are a bit patchy.

<br>

The general gist of this project was to create a means of collecting multiple streams of _XBox Kinect®_ camera+depth data over a local network. The primary aim was to use [Touchdesigner](/tutorials/Touchdesigner_Image_DMX) to create stage visuals, however I also wanted to try using it to make a low-cost multi-camera 'Motion Capture' studio. The _Touchdesigner®_ software already has Kinect input support (see below), however it can only support one or two Kinects directly connected to the software.

![Depth.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/KinectIP-Depth.PNG)

Kinect V2 cameras are generally quite cheap to buy second-hand on eBay, however they require USB 3 connections to a Windows machine. This makes it quite inconvenient to deploy them across a wide area. The plan was to make an 'adapter' that converted Kinect data into a compressed low-latency video stream that could be sent over a network. To stream the data, I intended to use the low-bandwidth [NDI Protocol](https://ndi.video/type/ndi-tools/). This is a lossy video compression scheme, but it's very low-latency on a local network and plenty sufficient for the low-resolution images that the kinect outputs.

For this project, the ideal candiate at the time was a _Rock64_ SBC. This project pre-dates the Raspberry Pi 4, so at the time this was the only widely available board with both USB3 and Gigabit Ethernet. An overview of my intended system is shown below.

![System.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/KinectIP-System.PNG)

The Official Kinect SDK is Windows-only, however there is a neat project called [libreenect2](https://github.com/OpenKinect/libfreenect2) that handles a lot of the gnarly Linux driver logic and lets us extract depth data from the Kinect. The idea was to create some simple glue logic that would convert the frames into separate NDI streams. I also added a little web-based config panel (back in the days where I still thought PHP was the best thing since sliced bread!)

As with all projects, a lot of nasty issues ended up surfacing during development. For a start, the codebase for the Kinect SDK is very large, so to do any meaningful development I had to set up a cross-compiler. At the time I used Windows and seem to recall the development setup being a massive pain in the neck!

Moreover, it turns out that having this 'headless' Linux machine doing the conversions was causing its own problems. A lot of the Kinect SDK utilises GPU processing heavily. I was emulating the display using `xvfb`, however it turns out that a load of graphics acceleration libraries don't work with virtual framebuffers. All of this nightmare was on a board with *virtually no documentation...*.

My first successful 'frame' of streamed data is shown below: I think at the point I got this working, it was past 3AM...

![First_Decode.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/KinectIP-First-Decode.JPG)

At last some success!

My original plan for this project was to make a run of ten Kinect 'adapters' to sell to a local AV company that I had done some work for in the past. In order to do this I needed to come up with a slightly neater unit that I could assemble quickly. I designed an enclosure and kinect mount in Fusion 360 (see below), and made a 'shield' board for the Kinect/Rock64 SBC interfacing.

![Render.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/KinectIP-Render.PNG)

The PCB is a glorified breakout board, with a few buttons and a status LED. The Kinect has a proprietary USB connector that also supplies 12V to run the depth sensor. My plan with the PCB was to break out the spliced Kinect cable, then split this off into a power and data stream.

In retrospect, knowing what I do now about high-speed PCB layout, my design was destined to failure. My dodgy 2-layer board with double USB 3.0 connections spliced onto it naturally never worked.

![PCB.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/KinectIP-PCB.PNG)

This meant I had two options: either buy the bulky, extortionately priced adapter that Microsoft sell, or take the Kinect apart and break out the 12V connections manually. Naturally I went for the latter! Below was my bodged approach with parallel power and data connections.

Thankfully due to other software problems I never had to make these units in bulk. Suffice to say that modifying the Kinects was unecessarily tricky, with security screws everywhere.

![Internals.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/KinectIP-Internals.JPG)

So why did I abandon this project? Ultimately the use case for the networked Kinects was doing live projections and interactive stage sets. Unfortunately the project took so long that I'd left my stage lighting job by the time I got a decent working prototype together!

Nearing the completion of the project, the Raspberry Pi 4 was released, featuring USB3, Gigabit Ethernet, and most importantly: good software support! The details of the project are available on [GitHub](https://github.com/BOJIT/KinectIP/), however I'd recommend basing any new work on a Pi 4 or more modern Single-Board-Computer.

Still though... made a nice desk ornament for four years!

![Outside.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/KinectIP-Outside.JPG)
