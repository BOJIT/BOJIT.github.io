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

    let tiles = [

    ];
</script>

TODO

The second and unexpectedly final chapter in a series regrettably cut short...

... meant to be covering the fit-out of a campervan interior, but with some unexpected surprises!

Step 1: Design

![Van_Part_2-Configurations.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_2-Configurations.PNG)

---

<Container aspect="16:10">
    <CAD geometry="https://cdn.bojit.org/files/glb/VW_T4.glb"/>
</Container>

Animal Sanctuary...

![Van_Part_2-Solar_Panel.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_2-Solar_Panel.JPG)

Loads of holes in the roof already that needed patching

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

Reflect on importance of not spending so much time planning that the vehicle disintegrates!

While interior looked lovely when I sold it, I only really got 4-5 usable trips out of the vehicle.

Realised also like camping outdoors!

Next setup will probably just be a Volvo with some camping supplies in the back...

![Van_Part_2-Final.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_2-Final.JPG)
