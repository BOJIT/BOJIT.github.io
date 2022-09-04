---
title: Van Saga 1 - Raiders of the Lost Part
date: "15-05-2022"
published: true
hidden: true

tile:
  type: image
  image: /tiles/2022-05-15-Van_Part_1.PNG
---

<script>
    import YouTube from "@bojit/svelte-components/widgets/YouTube/YouTube.svelte";

    import Gallery from "@bojit/svelte-components/widgets/Gallery/Gallery.svelte";

    let tiles = [
        {
            type: 'image',
            caption: 'Power-Washing Burnt Trim',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_1.JPG'
        },
        {
            type: 'image',
            caption: 'Throttle Retro-Fitting',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_8.JPG'
        },
        {
            type: 'image',
            caption: 'The New Garage!',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_2.JPG'
        },
        {
            type: 'image',
            caption: 'Burnt Shell + Junk',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_3.JPG'
        },
        {
            type: 'image',
            caption: 'Window Repairs',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_4.JPG'
        },
        {
            type: 'image',
            caption: 'Cleaned Interior',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_5.JPG'
        },
        {
            type: 'image',
            caption: 'Me Mid-Spray Painting',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_6.JPG'
        },
        {
            type: 'image',
            caption: 'Rust Prevention',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_7.JPG'
        },
        {
            type: 'image',
            caption: 'Fixing the Coolant System',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_9.JPG'
        },
        {
            type: 'image',
            caption: 'Painting Trim Pieces',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_10.JPG'
        },
        {
            type: 'image',
            caption: 'Injection Pump Diagnosis',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_11.JPG'
        },
        {
            type: 'image',
            caption: 'Old ECU Teardown',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_12.JPG'
        },
        {
            type: 'image',
            caption: 'Track Rod-End Replacement',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Gallery_13.JPG'
        },
    ];
</script>

This is an article stub

<YouTube src="https://www.youtube.com/embed/_Tui8rpZaNA"/>

Sample Text

![Van_Part_1-Burnt_Out.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_1-Burnt_Out.JPG)

Sample Text

<Gallery colums={2} tiles={
    [
        {
            type: 'image',
            caption: 'Corsa-as-Power-Supply',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Corsa.JPG'
        },
        {
            type: 'image',
            caption: 'Interior Clean-Out',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Clear_Out.JPG'
        },
    ]
} />

Sample Text

![Van_Part_1-Shell.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_1-Shell.JPG)

Sample Text

<Gallery colums={2} tiles={
    [
        {
            type: 'image',
            caption: 'Head Gasket',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Engine.JPG'
        },
        {
            type: 'image',
            caption: 'TDI Pump',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Injection_Pump.JPG'
        },
    ]
} />

Sample Text

<Gallery colums={2} tiles={
    [
        {
            type: 'image',
            caption: 'Harness Patching',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Wiring_Bay.JPG'
        },
        {
            type: 'image',
            caption: 'Wiring Headaches',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Messy_Wiring.JPG'
        },
    ]
} />

Sample Text

<Gallery colums={2} tiles={
    [
        {
            type: 'image',
            caption: 'Spray-Painting Setup',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Spray_Art.JPG'
        },
        {
            type: 'image',
            caption: 'Repainted Console',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Van_Part_1-Console.JPG'
        },
    ]
} />

Sample Text

![Van_Part_1-Shell.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_1-Steering_Wheel.GIF)

Sample Text

![Van_Part_1-Shell.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_1-Final.JPG)

Sample Text

<Gallery tiles={[...tiles]}/>
