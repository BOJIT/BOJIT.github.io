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

    console.log(posts);

    // Components
    import Header from "$lib/components/Header.svelte";
    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";
</script>

<Header />

<Content>
    <h1>Index</h1>
</Content>
