---
title: Van Saga 2 - The Corrosion Strikes Back
date: "22-09-2023"
published: true
hidden: true

tile:
  type: image
  image: /tiles/2023-09-22-Van_Part_2.PNG
---

<script>
    import { Container } from "@bojit/svelte-components/layout";
    import { CAD, Gallery } from "@bojit/svelte-components/widgets";
</script>

This is the second and unexpectedly final chapter in a van conversion series regrettably cut short...
If you're following on from [Part 1](/projects/Van_Part_1), you'll remember that I got to the point that I had a drivable, but empty shell of a VW T4 campervan. While it is still usable for road trips in this form, it is sorely missing furniture and the insulation required to brave British winter camping trips...

Unfortunately due to some unexpected mechanical surprises, I ended up cutting back some of my grander plans for this conversion. Nevertheless, hopefully you can enjoy coming on the repair and conversion journey with me!

While restoring the van, I spent a lot of time getting inspiration from [Pinterest](https://pin.it/7MA0evnHT). The VW T4 Short Wheel-Base is an interesting half-way house in terms of size. It's not quite big enough to stand up in, so using one for a full live-in van conversion is tricky. On the other hand, I didn't want to kit it out purely as a weekend trip van. In addition, I kind of wanted a desk setup so I could potentially use is as an on-the go work space or repair station.

Many of the T4 designs on the internet either revolve around a rock-and-roll bed, or a fixed full-width bed design. I wasn't particularly enamoured with either of these options. There were two things I really wanted from the layout of the van:

- *A path from the front to the back of the van*. This is pretty useful when parked in tight spots, or if you want to put a bike in the back of the car. This ruled out a fixed bed setup.
- *An island kitchen next to the sliding door*. A lot of T4 conversions put the kitchen in the corner behind the driver's seat, opposite the sliding door. From a conversion point of view, this is very convenient, but it means that you have to cook while sitting down, plus venting of steam/smoke is harder. A friend of mine put their cooking setup in front of the sliding door of their conversion and the experience of cooking with a view and fresh air is delightful!

<br/>
The design I went for in the end was a lengthways seat that pulls out to become a double bed. The seats can also lift up to act as storage space for bedding.
In addition, I added a fold-down desk setup that could house a pin-board / monitor setup, while also doubling as a cupboard to store valuables in when leaving the van unattended.

A nice hardwood recessed stovetop and porcelain sink were probably not the most practical choice, but they look very pretty and I had some nice live-edge walnut slabs in my wood stock that were perfectly sized for this application.

Below you can see the van interior in desk _(left)_ and bed _(right)_ configuration.

If your browser supports it, you should also see an interactive model of the fit-out in a T4 shell. Contact me for Fusion 360 CAD files if you are interested on doing a similar conversion design. It should fit any SWB T4 model, but bear in mind I never fully kitted out my van, so double check any dimensions before copying!

![Van_Part_2-Configurations.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_2-Configurations.PNG)

---

<Container aspect="16:10">
    <CAD geometry="https://cdn.bojit.org/files/glb/VW_T4.glb"/>
</Container>

With a rough design planned out, it was time to start the conversion! Step 1 was dealing with some problems on the roof. The previous owner had drilled a load of holes in the roof for mounting a deck, and had never properly sealed them. As a result, I had to find a way of preventing further water leaks and rust spreading from these openings.

Around this time, I managed to get hold of a free solar panel that was been stripped from a local animal sanctuary (home of the [Famed Malmesbury Police Emus](https://www.independent.co.uk/news/uk/crime/man-attacked-emus-crash-malmesbury-b2132378.html)).
Unable to turn down such an opportunity, I decided to design a solar panel mount and roof rack set around the existing holes in the roof. While I don't really have that much use for roof racks, it seemed a good way to deal with the unsightly holes while getting some practical value out of them.

![Van_Part_2-Solar_Panel.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_2-Solar_Panel.JPG)

I chose to go with box aluminium and pop rivets for my roof rack construction. While a tad more time consuming than going with some welded box sections, it looks quite neat, plus has the added advantage of not needing to bother my friend with a TIG welder (who had already volunteered far too many hours in helping get this box of rust up and running in the first place!).

In the end, construction of all the struct ended up being quite a time-consuming affair. This wasn't helped by the fact that the holes in the roof weren't drilled at equal spacings, meaning each rack spoke needed to be a bespoke fit to the corresponding mounting points. The parts are mounted with rubber gaskets, solving the original leaking problem.

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Pop-Welded Aluminium Roof Struts',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Roof_Rack_1.JPG'
        },
        {
            type: 'image',
            caption: 'Roof Racks Fitted over Solar Panel',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Roof_Rack_3.JPG'
        },
        {
            type: 'image',
            caption: 'Mass Production in the Garage!',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Roof_Rack_2.JPG'
        },
        {
            type: 'image',
            caption: 'Finished Roof Racks (and end of leaky roof!)',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Roof_Rack_4.JPG'
        },
    ]
} />

TODO

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Modified Plumbing Fixture Mushroom Vents',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Vents_1.JPG'
        },
        {
            type: 'image',
            caption: 'Nylon "Patches" to Fit Around Solar Panel',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Vents_2.JPG'
        },
        {
            type: 'image',
            caption: 'Installed Vents',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Vents_3.JPG'
        },
    ]
} />

Looking to insulate at lowest cost while still retaining warmth. Builder's merchant cellotex awkward to work with, but very effective for the cost!

<Gallery columns={4} tiles={
    [
        {
            type: 'image',
            caption: 'Laying Underfloor',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Insulation_1.JPG'
        },
        {
            type: 'image',
            caption: 'Sub-Frame "Patching" and Wheel Arches',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Insulation_2.JPG'
        },
        {
            type: 'image',
            caption: 'Window Cut-Outs and Trimming',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Insulation_3.JPG'
        },
        {
            type: 'image',
            caption: 'Makeshift "Clamp" while Installing Curved Top Cellotex Retainers',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Insulation_4.JPG'
        },
    ]
} />

Entirety of car burnt out and covered in smoke/stickiness. Need to cover all exposed metal.

Original trim parts all burnt out. Second hand parts generally in poor condition.

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Routing Matching Seatbelt Trims',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Lining_1.JPG'
        },
        {
            type: 'image',
            caption: 'Creating Smooth Target Surface for Carpeting',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Lining_2.JPG'
        },
        {
            type: 'image',
            caption: 'Automotive Carpet Installation',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Lining_3.JPG'
        },
    ]
} />

Details on blinds: far too much time spent on them, but results are pretty!
Aim to trap as much heat as possible. Block convection losses.

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Standard Argos Venetian Blinds Behind Cavity',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Blinds_1.JPG'
        },
        {
            type: 'image',
            caption: 'Roll-Up Cabin Separator (for Winter Camping)',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Blinds_6.JPG'
        },
        {
            type: 'image',
            caption: 'Rear Window Liners',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Blinds_2.JPG'
        },
        {
            type: 'image',
            caption: 'Roller Mechanism (Clock Spring Winder)',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Blinds_4.JPG'
        },
        {
            type: 'image',
            caption: 'Fully Lined Door and Blind (Looks Sharp!)',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Blinds_5.JPG'
        },
        {
            type: 'image',
            caption: 'Lining Blind with Thermal Insulation',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Blinds_3.JPG'
        },
    ]
} />

Electronics - fairly standard 12V system Simple solar split charger arrangement. Mention embedded plans. Never implemented

Importance of planning cable routes _before_ internal fit-out.

<Gallery columns={2} tiles={
    [
        {
            type: 'image',
            caption: 'Wiring Harness Planning',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Electronics_1.JPG'
        },
        {
            type: 'image',
            caption: 'Installed Electrical System',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Electronics_2.JPG'
        },
    ]
} />

Underneath folding bed that never got built...

Cladding installation. Details, nice "rustic" sprayed finish... Don't like pure varnish look.

<Gallery columns={4} tiles={
    [
        {
            type: 'image',
            caption: 'Dry Install of Cladding Panels',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Cladding_1.JPG'
        },
        {
            type: 'image',
            caption: 'Sub-Frame "Patching" and Wheel Arches',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Cladding_2.JPG'
        },
        {
            type: 'image',
            caption: 'Window Cut-Outs and Trimming',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Cladding_3.JPG'
        },
        {
            type: 'image',
            caption: 'Makeshift "Clamp" while Installing Curved Top Cellotex Retainers',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Cladding_4.JPG'
        },
    ]
} />


Incidents. 20 year old vehicle!

- Gear linkage failed on hill
- General deteriation / panels coming loose. Only even numbered gears...
- Door fell off
- Engine fell out with no phone signal...
- Rusted Exhaust Snapping
- Every bolt in suspension seized

Shortcuts taken by previous owner... e.g. window seals, ceiling bolts, etc... Caused more trouble than getting an unmodified panel van.

<Gallery columns={3} tiles={
    [
        {
            type: 'image',
            caption: 'Door Fell Off While Moving...',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Incident_Door.JPG'
        },
        {
            type: 'image',
            caption: 'Engine Falling Out in Middle of Snowdonia',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Incident_Engine_1.JPG'
        },
        {
            type: 'image',
            caption: 'Patching Gear Linkage with Jubilee Clamp to Get Home...',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Incident_Gears.JPG'
        },
        {
            type: 'image',
            caption: 'Distance Engine Dropped While Driving',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Incident_Engine_2.JPG'
        },
        {
            type: 'image',
            caption: 'World\'s Sketchiest Custom Drill Bit to Bore Hard-to-Reach Hole',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Incident_Drill.JPG'
        },
        {
            type: 'image',
            caption: 'Trying to Remove Rusted Wheel Bearings',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_2-Incident_Bearings.JPG'
        },
    ]
} />

Reflect on importance of not spending so much time planning that the vehicle disintegrates! Moving abroad, so hand forced.

While interior looked lovely when I sold it, I only really got 4-5 usable trips out of the vehicle. Looks like it's still got a valid MOT, so someone's hopefully getting good use out of it!

Realised also like camping outdoors!

Next setup will probably just be a Volvo with some camping supplies in the back...

![Van_Part_2-Final.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_2-Final.JPG)
