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

    import Gallery from "$lib/components/Gallery.svelte";
    console.log(posts);

    $: tiles = posts.map((p) => ({
        type: p.meta.tile.type,
        image: import.meta.env.VITE_IMAGE_BASE + p.meta.tile.image,
        caption: p.title
    }));
</script>


<svelte:head>
    <title>BOJIT</title>
</svelte:head>


<!-- Main Navigation -->
<Gallery tiles={tiles}/>
