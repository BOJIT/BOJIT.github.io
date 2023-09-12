---
title: LED Hammock Room
date: "15-02-2020"
published: true

tile:
  type: image
  image: /tiles/2020-02-15-LED_Hammock_Room.JPG
---

<script>
    import { YouTube } from "@bojit/svelte-components/widgets";
</script>

Our student accommodation block has a completely empty room in one of the communal spaces. I think on the original site plans it was meant to be a bathroom, but when we moved in it was just an empty windowless box.

We wanted to re-purpose the room and make it into a relaxation/chill space. We couldn't make any permanent changes to the room, but it just so happens that the room is an almost perfect cuboid, so I decided to construct a frame inside the room and make a free-standing dual hammock stand. However, as the room is completely pitched-black when the door is closed, we thought it would be quite fun to put some LED strips around the frame of the room. As it so happened, I had 15m of WS2812b addressable LED tape left over from a previous project, and wanted to try something akin to [Four Tet's 2018 tour light rig](https://www.youtube.com/watch?v=Ca6pjR2TLns). I didn't want to buy any more LEDs, as I had set myself a strict £100 budget for the project, but to give the illusion of lots of LEDs, I used some heavy-duty [mylar foil](https://www.amazon.co.uk/Silver-Lightite-Strong-Reflective-Sheeting/dp/B01138KKKW/ref=asc_df_B01138KKKW/?tag=googshopuk-21&linkCode=df0&hvadid=269126795226&hvpos=&hvnetw=g&hvrand=16350266725274799922&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1006909&hvtargid=pla-719122985648&psc=1) to create an 'infinity mirror' effect. It didn't quite work out as an infinity room - the mylar isn't that reflective, and getting sheets that large to remain taut and flat without attaching it to the wall was a nigh on impossible. However, the effect is still pretty cool: a video of the light-show in action is embedded below:

<YouTube src="https://www.youtube.com/embed/BzbhOj6v1EI" autoplay/>

I tried to conduct most of the construction in secret, so I took some very detailed measurements of the room and constructed all of the frames outside of the room and assembled it on a quiet weekend. As it turns out, the room is actually slightly trapezoidal top to bottom, but undersized the frame by a bit anyway to allow for some expansion and contraction of the timber. The most critical part of the frame design was making the entire thing rigid enough to hold two hammocks, while ensuring that each 'panel' of the frame could be constructed outside and still fit through the door when it came to the final assembly. I cut it fine on a couple of occasions, but all of the parts did just about fit into the room!

![LED_Hammock_Room-Sketch.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/LED_Hammock_Room-Sketch.JPG)

I don't really trust my maths when it comes to this kind of project, so I decided to quickly mock up the frame in CAD. This served as a helpful assembly guide, and also allowed me to tweak the panel size so I didn't end up with lots of waste when using standard 2.4m CLS. I had a bit of a trade-off here: the larger the individual panels, the better the mirror/infinity room would look, but equally, the frame would get significantly more wobbly and the mylar sheet would likely have more ripples in it.

![LED_Hammock_Room-CAD.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/LED_Hammock_Room-CAD.PNG)

Unfortunately I didn't really take any pictures of the construction of the frame, but there were no details that were particularly thrilling. I used standard *38mm x 68mm CLS* for virtually all of the framing, and it is mostly held together with 2" wood screws. The mylar sheeting is stapled to the back of the frame, and I tried my hand (and failed miserably) at hot-air levelling the Mylar sheets.

The only part of the build I got pictures of was the terrifying experience of trying to get the CLS lumber back from *Wickes* in my *Nissan Micra*. The *Micra* is definitely not built for these shenanigans, but with a few bungee cords and a very willing friend holding on to timber as we hared down a dual-carriageway with the rear boot open, we did eventually get the wood back home!

![LED_Hammock_Room-Timber.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/LED_Hammock_Room-Timber.JPG)

![LED_Hammock_Room-Micra.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/LED_Hammock_Room-Micra.JPG)

The controller is relatively simple - just a 30A 5V supply with a Raspberry Pi running the LED tape using a Python script. I broke out the Ethernet connection for controlling the tape with *ArtNet*, and there is even a small USB sound card for doing sound-activated light-shows (though I never actually got round to implementing that in software). The Pi shares the same supply as the LED tape, but the data output is optically isolated (partially for short-circuit protection, but mostly just a lazy 3.3V-5V level conversion with the parts I had on hand).
My script reads USB HID commands from my [home-made lighting wing]({import.meta.env.VITE_BASE_URL}/projects/MagicQ_Wing) and uses them to control a simple stack-style lighting controller, which allows me to busk the lights manually if I so desire.

![LED_Hammock_Room-Controller.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/LED_Hammock_Room-Controller.JPG)

Below is a quick before and after picture of the room - suffice to say it is quite an improvement on a blank room with nothing in it! The frame does creak alarmingly when you get into the hammocks, but it seems fairly sturdy once you're in them. The best part of the whole project is that it is completely non-intrusive, so when the time comes to move out we should be able to reverse the room back to its original state, and no-one will be any the wiser... :)

![LED_Hammock_Room-Before_After.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/LED_Hammock_Room-Before_After.JPG)


![LED_Hammock_Room-Dark.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/LED_Hammock_Room-Dark.JPG)
