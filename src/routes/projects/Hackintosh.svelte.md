---
title: PowerMac G5 Hackintosh
date: "01-08-2020"
published: true

tile:
  type: image
  image: /tiles/2020-08-01-Hackintosh.PNG
  fontsize: 0.8
---

This will be a brief article: I have had a few people enquire about the 'Mac Pro' that's sitting under my desk, and I thought I could give some of the technical details here. It is by no means a particularly powerful computer (the original PC build was done in 2013), but it does have a few unique features that set it apart from most computers.

My primary aim when building the Hackintosh was to make it look as much like an original *PowerMac G5* as possible. The original front panel buttons and headphone jack are used, but the firewire ports have been neatly replaced with USB 3.0. I also made a custom sheet metal ATX conversion plate to sit in the back, which leaves most of the back casing intact. This was considerably more effort those [conversion kits](https://www.thelaserhive.com/product/g5-atx-kit-psu-holder/) you can get online, but is much prettier in my opinion. The internals are significantly different to the original *PowerMac G5*, but I am still using the perspex cover and the original fan shroud, just to maintain the aesthetic.

![Hackintosh-Case_Open.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Hackintosh-Case_Open.JPG)

The one part of this project that was slightly sketchy was re-housing the original power supply. Unlike many of the *G5* conversions online, I wanted to keep the original power supply that sits across the bottom of the case, but the original *PowerMac* power supply is terribly loud and inefficient. Instead, I decided to re-house a modern power supply inside the shell of the old case. I would **not recommend doing this**, as the capacitors in ATX supplies can hold their charge for weeks after they have been unplugged. I took the precaution of discharging all the capacitors through an electronic load before doing the conversion, and lined the insides of the original casing with acetate. The original PSU cooling fans were very noisy, so I replaced them with some 12V ones from my junk/salvages pile. They can be wired to the original power supply fan header, but I didn't want to take chances, so my fans are wired to be on all the time.

![Hackintosh-Power_Supply.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Hackintosh-Power_Supply.JPG)

Another neat feature of this PC is that it has a built-in *Ubiquiti* router and *Mikrotik mAP Lite* that can act as both a station and an access point. This is very helpful, as I do a lot of projects where I need a controlled network environment for testing, and I am not always network admin in my building. This setup gives me a reliable switched network where I can assign static DHCP mappings and snoop all of the traffic without restriction. The *Mikrotik* router is usually in access point mode, which lets any wireless device (typically *ESP-01* modules) to connect to the test network. However, the combination of the *Mikrotik* and the *Ubiquiti* router gives me the option to set up the network with a redundant connection to another network. This means that if either the WiFi or the Ethernet into my PC fails, the system will stay connected with no downtime.

![Hackintosh-Network_Switch.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Hackintosh-Network_Switch.JPG)

I also thought I would put in a Raspberry Pi inside the case as well to automate various tasks, and perhaps run [Pi-Hole](https://pi-hole.net/) as well, but I don't really use it much. Part of the problem here is that the Pi and the router are powered by the main PC power supply, and neither have a power-down sequence linked to the PC. The *Ubiquiti* router is relatively hardened against sudden power outages, but after turning on and off my PC every day for 6 months, the power cycling has corrupted my Raspbian installation. I'm sure there is a way around this (perhaps have a script that shuts down the Pi over SSH?), but at the moment it is simply easier for me to use an external Pi.

![Hackintosh-Raspberry_Pi.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Hackintosh-Raspberry_Pi.JPG)

This build did not actually start as a Hackintosh build, I just really liked the style of the old *PowerMac G5* cases, but as I was dual-booting *Windows* and *Linux* anyway, I thought I may as well try *MacOS* as well. My hardware is reasonably well suited for a Hackintosh, and there are far better places online to find information about Hackintosh builds than here, but my one bug bear with the system is the fact that the latest versions of *MacOS* don't properly support my *NVidia* graphics card. I am still stuck on *High Sierra* and most security updates will break my driver setup, much to my frustration!

Other than this though, this computer setup is serving me very well, and I personally think it looks much classier than the RGB monstrosities that seem to be the rage in PC designs these days. I can also appease the hardcore Mac fanboys as well, as most of them don't even notice that it's not the real deal!

![Hackintosh-Full_Case.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Hackintosh-Full_Case.JPG)
