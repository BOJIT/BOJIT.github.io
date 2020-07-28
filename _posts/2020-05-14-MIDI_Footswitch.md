---
layout: page
title: BluePill MIDI Footswitch
categories: projects

tile:
  type: link
  colour: --BOJIT-amber
---

The current COVID-19 situation has made it much harder to get raid scrap heaps for supplies surreptitiously, so the quality of this MIDI footswitch is not much to write home about. I do plan to remake this footswitch again with a metal housing and a slightly more 'Tour-Ready' feel, but considering I am currently stuck self-isolating in my room I want to finally get around to learning the basics of live-looping in *Ableton*. This footswitch (pictured below in front of the *Zoom G5*) gives me 10 buttons that output MIDI CC over USB, meaning they can be mapped to virtually any attribute in *Ableton*.
The construction is once again based around an STM32F103 BluePill, using the same USB composite library described in [this article]({{ site.baseurl }}{% post_url 2019-08-17-Macro_Pad %}).

![MIDI_Footswitch-Switches.JPG]({{ site.imgurl }}/posts/MIDI_Footswitch-Switches.JPG)

The controller board is pictured below: it is just a piece of perfboard with the BluePill and a full-sized USB-B connector mounted next to it. One of things I really like about the BluePills is that the USB data pins are broken out on the GPIO pins just like all the other peripherals. This would be considered sacrilege for Full-Speed and High-Speed USB, but for the low data rates we are handling with USB HID and MIDI it is absolutely fine to wire another USB connector in parallel with the onboard micro-USB, or wire the BluePill directly to a USB hub if one is incorporated into your project. Everything just looks much neater this way.

![MIDI_Footswitch-Control.JPG]({{ site.imgurl }}/posts/MIDI_Footswitch-Control.JPG)

The footswitches are wired with a common 3.3V and are taken directly to the STM32 input pins, which have internal pull-down resistors enabled. Switch debounce is handled in software.
In lieu of a proper metal casing I used some PVC cable trunking that I found in a pile behind my appartment. This stuff isn't the prettiest-looking, but it can be worked with a hot-air gun to make it more pedal-shaped and put some curves into it to make it more rigid. It certainly isn't pretty, but lockdown is putting a stop to anything more grandiose at the moment! My floor is also very smooth, so rubber pads are being replaced with Blu-Tack for the moment. Any form of pedalboard build is a long way off for the moment, but I might splash out on a rug at some point to make all the pedals and switches slightly less slippy!

![MIDI_Footswitch-Wiring.JPG]({{ site.imgurl }}/posts/MIDI_Footswitch-Wiring.JPG)

The footswitches are a nice edition to my slightly bodged live setup, and while I have very good intentions to remake them in a slightly more rigid case, I wouldn't be surprised if the PVC trunking is still there in a couple of years time!

Pictured below is my current live setup: the footswitches and my [DIY E-Drum set]({{ site.baseurl }}{% post_url 2020-05-16-DIY_E_Drums %}) are the two latest additions. At the moment the setup is still dependent on my PC for all of the looping and audio routing, but hopefully my next project should make the setup entirely PC-free! Be sure to keep an eye out for that project post in the near future...

![MIDI_Footswitch-Stage_Setup.JPG]({{ site.imgurl }}/posts/MIDI_Footswitch-Stage_Setup.JPG)
