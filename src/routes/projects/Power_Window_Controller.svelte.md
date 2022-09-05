---
title: DIY Power Window Controller
date: "23-05-2022"
published: true

tile:
  type: image
  image: /tiles/2022-05-23-Power_Window_Controller.PNG
---

This project is part of my larger [van overhaul](/projects/Van_Part_1), however I thought it would make more sense to break out into its own article.

For some context, when I bought my van it did not have any window regulators in. For some inexplicable reason the previous owner had decided to remove them and install electric windows, despite the fact that the vehicle didn't have a working engine. When I bought the van, it came with two electric window regulators, and the windows themselves were held up with pliers!

This article shows my crude attempt at adding a DIY window control mechanism to my van, and some of the challenges surrounding the design...

![Power_Window_Controller-Design.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Power_Window_Controller-Design.JPG)

I should note that the design for this controller was largely dictated by what I had on hand, so by no means serves as a reference implementation! However, the key requirements of a controller are fairly basic, so there are likely many valid ways to build this device.

The first major consideration is that many window regulators don't come with any kind of stopping mechanism fitted. Essentially you drive the window up/down until the motor stalls. A very simple controller would to simply have a DPDT switch that directly connects the window motors to a fused 12V line, however this does have some drawbacks:

- The switches need to be rated for the full motor stall current. This could be as high as 35A!

- If you hold down the switch while the window is at its limit, you are effectively shorting out your battery through a stalled motor coil. This may burn out your motor/get hot!

- You cannot implement smart features like _single-touch_ window closing.

Naturally, my first response was to go fully overkill, and design a fully software-controllable window controller based around the ubiquitous 'blue-pill' STM32 microcontroller. The schematic for my controller is shown below.

![Power_Window_Controller-Schematic.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/Power_Window_Controller-Schematic.PNG)

This circuit is very simple, and can be modified to work with whatever components you happen to have on-hand. The core window control is done using 4 automotive relays, each driven by a simple BJT low-side switch. Virtually any rated N-Channel FET would suffice for this application.

This switching configuration uses standard SPDT automotive relays. By default both motor terminals are connected to GND. You can spin the motor in either direction by switching one of the relays. This circuit has two neat features:

- When the relays are off, the motor terminals are shorted together. This gives a nice return path for back-EMF, removing the need for any freewheeling diodes.

- There is no software configuration that can accidentally short out the supply rails as one can with H-Bridge topologies.

The 'stall' detection is done with `ACS172` hall-effect current sensors. These are cheap ICs that do not add considerable impedance to the measured current path. They are not particularly accurate, but that isn't too problematic in this scenario. The main drawback of the `ACS172` is that it is a 5 Volt part. For interfacing with a 3V3 microcontroller I added voltage dividers to adjust the sensor range (throwing in a couple of 3V3 zener diodes doesn't hurt either).

The 'module' in its final form is shown below. It is by no means the most compact, but hey, overkill electrics is something of a theme in my van.

![Power_Window_Controller-Module.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Power_Window_Controller-Module.JPG)

All that was left was to program the software. While the software isn't a brain-melter, it isn't as straightforward as I initially thought. There are actually a number of different behaviours and states that need to be accounted for, along with safely handling any potential exceptions, for example:

- Holding the close button after the window has fully closed.

- Automatically opening/closing the window if the switch is held down for a short period of time, but remaining in manual mode if held down for a long period of time.

- Cancelling auto-closing if user touches controls

- Stopping window movements if the window hasn't reached a known state within a certain time window.

Furthermore, our current thresholds for stalling are different depending on whether the window is moving up or down, and depending on whether the engine is running or not!

My software is implemented as a `C++` _Class State Machine_, and is available on [GitHub](https://github.com/BOJIT/power-window-controller). It needs a bit of tweaking to get reliable operation, but is very solid once configured correctly.

![Power_Window_Controller-Installed.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Power_Window_Controller-Installed.JPG)

Was this controller a good idea when a couple of high-powered switches would have sufficed? Probably not.

But hey, my van is the epitome of projects that really don't justify the time put into them, but that's not really the point of these kind of projects... at least in my book!
