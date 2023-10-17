---
title: Art Coursework
date: "15-05-2017"
published: true

tile:
  type: image
  image: /tiles/2017-05-15-Art_Coursework.JPG
---

<script>
    import { Gallery } from "@bojit/svelte-components/widgets";

    let tiles = [
        {
            type: 'image',
            caption: 'Nearby Street Sign',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Sign.JPG'
        },
        {
            type: 'image',
            caption: 'Watercolour Street Sign',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Ink.JPG'
        },
        {
            type: 'image',
            caption: 'Art Classroom Window',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Window.JPG'
        },
        {
            type: 'image',
            caption: 'John Piper - Barn',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Barn.JPG'
        },
        {
            type: 'image',
            caption: 'LUSH Factory',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Lush.JPG'
        },
        {
            type: 'image',
            caption: 'Lowry Pastels',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Lowry.JPG'
        },
        {
            type: 'image',
            caption: 'Clavell Tower',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Kimmeridge.JPG'
        },
        {
            type: 'image',
            caption: 'Christmas Card',
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Card.JPG'
        },
        {
            type: 'image',
            caption: "Battersea - Liam O'Farrel",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Battersea.JPG'
        },
        {
            type: 'image',
            caption: "Rabbit in Ink",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Rabbit.JPG'
        },
        {
            type: 'image',
            caption: "Nisa Local",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Industrial_Estate.JPG'
        },
        {
            type: 'image',
            caption: "Study - Louis Jover",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Jover.JPG'
        },
        {
            type: 'image',
            caption: "Oleander Bush",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Oleander.JPG'
        },
        {
            type: 'image',
            caption: "Rouen - Pen and Ink",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-France.JPG'
        },
        {
            type: 'image',
            caption: "Dorchester - Acrylic Tests",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Acrylic.JPG'
        },
        {
            type: 'image',
            caption: "Wells - Chris Lee",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Wells.JPG'
        },
        {
            type: 'image',
            caption: "Cezanne - Pyramid of Skulls",
            image: import.meta.env.VITE_IMAGE_BASE + '/posts/Art_Coursework-Skull.JPG'
        },
    ];
</script>

During a recent clear-out, I came across my old art textbook from GCSE. As the book is about to be filed away on a dusty shelf for an indeterminate length of time, I thought I would put some images up here so I can always find them if I need them :)

<Gallery tiles={[...tiles]}/>

It has been some time since I've done any painting, and I'm very out of practice. My hope is that this website can be an outlet to try out some digital art at some point in the future.
