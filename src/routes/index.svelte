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

    import PhotoGallery from '$lib/components/PhotoGallery/PhotoGallery.svelte';

    console.log(posts);
</script>


<svelte:head>
    <title>BOJIT</title>
</svelte:head>


<!-- Main Navigation -->
<h3>I am the homepage!</h3>

<PhotoGallery />
