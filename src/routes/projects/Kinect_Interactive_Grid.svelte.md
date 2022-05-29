---
layout: page
title: Kinect Interactive Bulb Grid
categories: projects
date: 2019-03-10

tile:
  type: image
  image: /tiles/2019-03-10-Kinect_Interactive_Grid.JPG
---

This Spring our school hosted a production of Every Brilliant Thing, by Duncan Macmillan. This production was entirely student run, so we had a great deal more artistic freedom than most of our school shows permit. One afternoon, the director approached me with the expression of someone about to double your workload, and then raised the suggestion of making a grid of bulbs that could hang above the performance space (the show is performed in the round).
My initial reaction was somewhat dismissive, as the idea of driving nearly 40 incandescent lightbulbs off our school power distribution was frankly laughable. However, this conversation coincided with the arrival of some rather curious bulbs I found on Ebay. These bulbs were theose new COB LED 'filament-style' lamps that are all the rage right now. However, unlike many others I had seen, these were advertised as being DC-12V. Apparently they are intended for caravans and SUVs, but they are surprisingly hard to find. I could not find a single EU distributor of these bulbs, and only a handful of Ebay sellers. Here is the supplier [I used](https://www.ebay.co.uk/itm/S14-Led-E27-2W-Edison-Filament-Bulb-Lamp-Light-Warm-White-2700K-AC220V-DC12V-3V-/273353419840?var=).
The DC variety are advertised as non-dimmable, but as the bulbs don't contain the same rectification stage that the AC-Variety use, I suspected that they could be dimmed with PWM just like a normal LED strip. This is not entirely true, but they do perform quite well in typical theatre use. Below is a short clip demonstrating the final outcome:

<div class="aspect-ratio">
  <iframe type="text/html" src="https://www.youtube.com/embed/1h2riunyS8I?version=3&autoplay=1&loop=1&playlist=1h2riunyS8I&controls=0&modestbranding=1&mute=1" frameborder="0"></iframe>
</div>

After asking the supplier and doing some digging online, I couldn't find anyone who had managed it successfully, so decided to order a couple and experiment a bit. As the bulbs are only £1.39 shipped, I felt I could justify it!
Below is my test setup for testing the bulbs: essentially it is a cheap PWM dimmer which has been modified with an Arduino Nano to give it DMX input. In the final version I used [this 36 channel dimmer](https://www.aliexpress.com/item/4000911151027.html), but I wanted to make sure that as a last resort I could get the system working with the Arduino's Default PWM frequency of 490Hz (a good frequency that does not show up on our camcorders). This worked surprisingly well, all the way down to about 5% duty cycle. As with most LED dimmers, the dimming curve is not linear: a change from 0-10% corresponds to a brightness change of about 50% at the bottom end. This makes very slow fades problematic. Moreover, at approx. 2% duty cycle the bulbs tend to violently flicker, which leads me to believe that there is some sort of constant-current circuitry inside the bulbs (while tempting to smash one open and check, I only had two bulbs, and I did not fancy waiting another 6 weeks for a replacement).
Despite being a bit snappy at low intensity, as well as the very occasional flicker, these bulbs performed very well under theatre lighting, and their low power-consumption and cost made them ideal for large grid installations. The entire 36 bulb grid ended up costing roughly £120 to build, and drew a peak of about 80W (the equivalent of two incandescent bulbs!).

![Kinect_Interactive_Grid-Light_Test.JPG]({{ site.imgurl }}/posts/Kinect_Interactive_Grid-Light_Test.JPG)

When we initially devised the plans for the grid, we had not thought about using a Kinect to make the system interactive. Without the Kinect the grid was relatively simple (albeit time-consuming) to make. The grid was essentially a 2.4m CLS square with a rope mesh reinforced with zip-ties at the intersections. To keep the grid stable when hanging, I made a central platform to hold the power supply and LED driver board. This also was used to mount the Kinect. A note to anyone attempting something like this: measure the size of the doors to your theatre before making the frame! We managed to make the frame 2cm wider than our school doorways, so moving the frame between rooms was frankly a nightmare.

![Kinect_Interactive_Grid-Bulbs.JPG]({{ site.imgurl }}/posts/Kinect_Interactive_Grid-Bulbs.JPG)

Lately I have done a lot of playing about with a program called Touchdesigner. It is essentially a visual scripting and manipulation tool. It is often used for projection mapping, but the large variety of input/output operators make it a very flexible tool in visual FX. To get an idea of what it can do, I would highly encourage you to read [this article](https://www.derivative.ca/Events/2014/Gravity/) showing how Touchdesigner was used in the making of the film 'Gravity'. The really nice thing is that Touchdesigner is free for non-commercial use, with a resolution limit of 1280x1280. A resolution of 6x6 falls well below this threshold! Principally, Touchdesigner offers a much more powerful pixel-mapping engine than most lighting consoles (in our case MagicQ), however the developers have added support for a variety of external inputs, including the Kinect.
Programming an entire theatre show in Touchdesigner is not practical, so we needed some way to merge the two DMX signals. As it happens, the DMX splitters in our venue have 2 inputs that are merged based on HTP, but an alternative to this is to send both outputs to the same address over Artnet. In Touchdesigner I set up a network that takes an input in the form of a black and white image and generates a series of channel values that can be output over DMX. The core pixel-mapping engine is pictured below, and I have attached the Touchdesigner File [here]({{ site.fileurl }}/2019-03-31-Touchdesigner_Image_DMX-Example.toe) if anyone is interested.

![Kinect_Interactive_Grid-Touchdesigner.PNG]({{ site.imgurl }}/posts/Kinect_Interactive_Grid-Touchdesigner.PNG)

The raw kinect data needed to be processed heavily before the output started leaving the lovely trails seen in the demonstration above. This processing needs to be done with as little latency as possible, but before considering how to tackle this I had a somewhat more urgent problem. The Kinect is hanging in the centre of our studio, but the control room (along with the desktop PC running touchdesigner) is located about 20m away on a different floor of the building (pictured below). The Kinect V1 is connected by a 480Mbps USB connection, and USB is not designed to be run over such long distances. There are plenty of USB extenders on the market, but only *one* is known to work with the Kinect V1, and none are known to work with the Kinect V2. Considering the USB extender in question costs £350, I was determined to find an alternative. The solution in the end was rather bodged, but worked reliably for every show: I hung an old laptop from the roof of the theatre near to the Kinect, and ran a demo file from the Kinect SDK on the laptop that simply displayed the depth stream on the screen. I then used OBS (Open Broadcaster Software) to create an NDI stream that I could send over Cat5 to the desktop PC. I then used Newtek's *Virtual Input* to create a virtual webcam that could be input into Touchdesigner. This ~~sounds~~ ***is*** incredibly inefficient, but I managed to achieve sub 150ms latency, which was acceptable for the show. Note that if the laptop in the roof could run Touchdesigner, I could have sent the data from one PC to another using the software, however the old laptop was not up to the task. In fact, I am working on a more professional solution to streaming Kinect data, which I am hoping to have published by the end of September.

![Kinect_Interactive_Grid-Control.JPG]({{ site.imgurl }}/posts/Kinect_Interactive_Grid-Control.JPG)

Once I was able to get a depth stream into Touchdesigner, I could begin processing the data to make the trails, along with some other visual effects that could be mixed in during the show. As the Kinect is looking at actors from above, the built-in tracking features don't really work here. Essentially the processing consisted of multiple stages of feedback and luminance threshold filtering, along with a compensation stage that corrected for the non-linearity in the bulb dimming. It is also worth noting that with theatrical installations such as this, subtlety is key, so we had to find a way of incorporating the elements of interactivity without them overpowering the acting.
This setup was very fun to play with once we got it up and running, and I was personally surprised at how effective pixel-mapped effects could be with only a 6x6 grid. As for the Kinect implementation, while this was a good starting point, I feel I have a lot more work to do before implementing the Kinect in theatre productions becomes hassle-free! Below is a look from below of the grid with a chase running to demonstrate the dimming curve of the bulbs.

![Kinect_Interactive_Grid-Grid.JPG]({{ site.imgurl }}/posts/Kinect_Interactive_Grid-Grid.JPG)

<div class="aspect-ratio">
  <iframe type="text/html" src="https://www.youtube.com/embed/KqTWhsiiKgE?version=3&autoplay=1&loop=1&playlist=KqTWhsiiKgE&controls=0&modestbranding=1&mute=1" frameborder="0"></iframe>
</div>

As for the show itself, in contrast to previous student productions, it was a resounding succes! I would highly reccomend looking up the original play by Duncan Macmillan. While our director modified the play to be performed by an ensemble, it is originally a monologue, performed without any stage lighting or effects at all.

I have written a separate article outlining the Touchdesigner pixel-mapping engine and how to interface with it. That can be found [here]({{ site.baseurl }}{% post_url 2019-03-31-Touchdesigner_Image_DMX %}).

![Kinect_Interactive_Grid-Curtain_Call.JPG]({{ site.imgurl }}/posts/Kinect_Interactive_Grid-Curtain_Call.JPG)
