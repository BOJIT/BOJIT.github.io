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

This is the first chapter in a rabbit-hole that has consumed uncountable hours of my time. Back in mid-2021 I saw a listing for a non-runner VW T4 van in the Swindon area. Suffice to say, if this isn't already setting off alarm bells, when I went to view it, the front window was smashed, the entire interior was burnt-out, and the engine did not turn over.

In retrospect, this probably should have been enough to dissuade me from buying the van, but for some reason I decided it was a good idea, and went to pick it up a few days later. What could possible go wrong?

<YouTube src="https://www.youtube.com/embed/_Tui8rpZaNA"/>

Once I'd got it back, I began daunting task of doing an autopsy. This vehicle turned out to be the kind of project where the more time I spent with it, the more alarming problems I uncovered! As far as I could best work out, the previous owner had driven it for a couple of years back in 2011, at which point the engine had given in. He'd got halfway through a TDI engine replacement, then managed to set the interior on fire. After this he appeared to have let the van fall into disrepair. As we'll find later, he'd also done an interesting job on wiring in the new engine.

![Van_Part_1-Burnt_Out.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_1-Burnt_Out.JPG)

This all sounds very negative, however there is one attribute of the van which was fairly surprising: its lack of rust. This meant that while the clean-up work was fairly back-breaking, it was at least done on a reasonably solid foundation. The first job was to fix the windows. Let me explain...

When I bought the van, I got given a set of electric window regulators. I assume the previous owner wanted to fit them, but never got round to it. However, I'd also assumed that they'd left the original manual window regulators in. This turned out to be a bold assumption. On towing the van, I found that the window had simply been wedged up with pliers, and there was nothing holding up the windows at all!

After scrubbing all the smoke damage from the frame of the van I needed some way of sealing up the windows before I retrofitted a [power window controller](/projects/Power_Window_Controller), so I drove my Corsa very close to the van, and just shorted the window motors over my Corsa's battery terminals (see left-hand picture).

<Gallery columns={2} tiles={
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

At this point, a few months passed, as I didn't have a workshop setup, but then, after moving house, I suddenly got access to a garage, so could continue my restoration work. Virtually every part of the interior was smoke-damaged, so I had to strip out the entire trim right back to bare metal (see below). This gave me a good opportunity to neaten up all the internal wiring and replace all the disintegratng plastic in the interior. This was a back-breaking task that was made less fun by the fact that I had to do it in the winter!

![Van_Part_1-Shell.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Van_Part_1-Shell.JPG)

Sample Text

<Gallery columns={2} tiles={
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

<Gallery columns={2} tiles={
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

<Gallery columns={2} tiles={
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
