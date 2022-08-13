---
title: BOJIT V3 - Guitar Build
date: "25-06-2021"
published: true

tile:
  type: image
  image: /tiles/2021-06-25-BOJIT_V3.PNG
---

<script>
    import CAD from "@bojit/svelte-components/widgets/CAD/CAD.svelte";

    import Gallery from "@bojit/svelte-components/widgets/Gallery/Gallery.svelte";

    let tiles = [
        {
            type: 'image',
            caption: 'Neck Carving Through Carbon Fibre',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_1.JPG'
        },
        {
            type: 'image',
            caption: 'Binding Glue-Up',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_2.JPG'
        },
        {
            type: 'image',
            caption: 'Fretboard Pinning',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_3.JPG'
        },
        {
            type: 'image',
            caption: 'Hardware Fitting',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_4.JPG'
        },
        {
            type: 'image',
            caption: 'Neck Blank Levelling',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_5.JPG'
        },
        {
            type: 'image',
            caption: 'F-Hole "Thinning"',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_6.JPG'
        },
        {
            type: 'image',
            caption: 'Old-Fashioned Resawing!',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_7.JPG'
        },
        {
            type: 'image',
            caption: 'Bookmatched Top',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_8.JPG'
        },
        {
            type: 'image',
            caption: 'Neck Pocket Routing',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_9.JPG'
        },
        {
            type: 'image',
            caption: 'Setting Neck Joint',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_10.JPG'
        },
        {
            type: 'image',
            caption: 'My Workshop!',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_11.JPG'
        },
        {
            type: 'image',
            caption: 'Finished Build',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_12.JPG'
        },
        {
            type: 'image',
            caption: 'Headstock Design',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_13.JPG'
        },
        {
            type: 'image',
            caption: 'Back of Headstock',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/BOJIT_V3-Gallery_14.JPG'
        }
    ];
</script>

A few years back I made a [fully-homemade electric guitar](/projects/DIY_Guitar). This has served me well for a long time, however there were a few bug bears I had with it:

- The steel neck reinforcements make it very neck-heavy. However, I do like the very minimal headstock design, so I needed to find a more suitable construction method.

- The removable back panels and layered construction make the edges of the guitar quite sharp.

- The steel reinforcement strips make fitting standard pickups impossible, and make the neck profile impractically chunky.

- It is very heavy!

![DIY_Guitar-Pickup.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/DIY_Guitar-Pickup.JPG)

---

With all of these issues in mind, I decided it was time for the next build! The global pandemic may have also persuaded me to start a long woodworking project!

I rebuilt the old CAD from the GCSE project with a new refreshed design. If you have Javascript enabled, you can explore the CAD model below.

<CAD geometry="https://cdn.bojit.org/files/glb/BOJIT_V3.glb"
     aspect="20:9" />

A few key features of the new build include:

- Ultra-thin body and lightweight design.

- Standard humbucker pickup mounts without affecting the structural integrity of the neck joint.

- A prototype hidden tremolo/B-bender system (more on that later...)

I was very fortunate to get given a large slab of mahogany from a friend that I could use for the majority of the construction. In an homage to the old guitar, I found some spalted beech to make a bookmatched top from. With the design mostly finalised, I started on the build!

![BOJIT_V3-CAD_Model.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-CAD_Model.PNG)

---

## Templates and Construction

I don't trust myself enough to make a guitar freehand yet, so I made a fairly comprehensive set of templates for this build. These templates were made by printing off 1:1 templates, and carefully bandsawing/sanding to final size. For some of the small cutouts, I'd sized the templates based on a set of guide bushings, as some of the internal radii are too small to use a bearing cutter on.

![BOJIT_V3-Templates.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Templates.JPG)

One key tip is to check the dimensions of your printouts *before* you make your templates. As it happens, many printers will do some slight scaling to your documents when printing, so you might need to tweak your printouts to be accurate!

This guitar build leaned heavily on my [router table build](/projects/Router_Table). TODO

![BOJIT_V3-First_Routing.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-First_Routing.JPG)

TODO

![BOJIT_V3-Binding_Channel.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Binding_Channel.JPG)

TODO

![BOJIT_V3-Scratchplate.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Scratchplate.JPG)

TODO

![BOJIT_V3-Neck_Laminations.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Neck_Laminations.JPG)

TODO

![BOJIT_V3-Side_By_Side.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Side_By_Side.JPG)

TODO

![BOJIT_V3-Stain.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Stain.JPG)

---

## Wire Inlay

TODO

![BOJIT_V3-Wire_Inlay.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Wire_Inlay.JPG)

TODO

![BOJIT_V3-Wire_Inlay_2.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Wire_Inlay_2.JPG)

---

## Custom Bridge Design

TODO

![BOJIT_V3-CAD_Tremolo.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-CAD_Tremolo.PNG)

The CAD for the bridge is embedded below:

<CAD geometry="https://cdn.bojit.org/files/glb/Tremolo_Bridge.glb"
     aspect="20:9" />

TODO

![BOJIT_V3-Bridge.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Bridge.JPG)

TODO

![BOJIT_V3-Bender.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Bender.JPG)

---

## Gallery

TODO

Overview

![BOJIT_V3-Final.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/BOJIT_V3-Final.JPG)

Gallery

<Gallery tiles={[...tiles]}/>

