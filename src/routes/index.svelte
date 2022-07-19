<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ url, fetch }) {
        const posts = await fetch(`/posts.json`).then(res => res.json());
        return {
            props: {
                posts
            }
        };
    }
</script>

<script lang="ts">
    export let posts: any;

    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";
    import Gallery from "$lib/components/Gallery.svelte";
    import ThemeSelector from "$lib/components/ThemeSelector.svelte";

    const logo = `${import.meta.env.VITE_IMAGE_BASE}/general/BOJIT_circle.PNG`;
    const banner = `background-image: url("${import.meta.env.VITE_IMAGE_BASE}/general/home_banner_1080.JPG");`;

    const specialTiles = [
        // About
        {
            type: "link",
            caption: "About Me",
            subcaption: "",
            colour: "#00bcd4",
            link: "/about/"
        },
        // Index
        {
            type: "text",
            caption: "Index Page",
            subcaption: "",
            colour: "#009688",
            link: "/index/"
        }
    ]

    $: tiles = posts.map((p) => ({
        type: p.meta.tile.type,
        caption: p.meta.title,
        subcaption: p.meta.date,
        image: import.meta.env.VITE_IMAGE_BASE + p.meta.tile.image,
        colour: p.meta.tile.colour,
        link: p.path.slice(0, -".svelte".length)
    }));
</script>


<svelte:head>
    <title>BOJIT</title>
</svelte:head>

<ThemeSelector />

<div class="header" style={banner}->
    <img class="logo" src={logo} alt="BOJIT Logo"/>
</div>

<!-- Main Navigation -->
<div class="gallery">
    <Gallery tiles={[...specialTiles.concat(tiles)]} animate={true}/>
</div>

<Content>
    <hr>
</Content>


<style>
    .header {
        height: 100vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100%;
        position: relative;
        z-index: 0;
    }

    .logo {
        position: absolute;
        margin: 0;
        z-index: 1;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        height: 65vh;

        /* Fade in */
        animation: fade-in ease 0.7s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    .gallery {
        margin: 0.5rem;
        margin-top: 1rem;
    }


    /* Turn off parallax for mobile devices (too GPU intensive) */
    @media (max-width: 768px) {
        .header {
            background-attachment: scroll;
        }

        .logo {
            height: auto;
            width: 80vw;
        }
    }

    /* Logo Animation */
    @keyframes -global-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>

