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

    $: tiles = posts.map((p) => ({
        type: p.meta.tile.type,
        image: import.meta.env.VITE_IMAGE_BASE + p.meta.tile.image,
        caption: p.meta.title,
        subcaption: p.meta.date,
        colour: p.meta.tile.colour
    }));
</script>


<svelte:head>
    <title>BOJIT</title>
</svelte:head>

<ThemeSelector />

<!-- Main Navigation -->
<div class="gallery">
    <Gallery tiles={tiles}/>
</div>

<Content>
    <hr>
</Content>


<style>
    .gallery {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
</style>

