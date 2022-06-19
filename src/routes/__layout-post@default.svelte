<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ url, fetch }) {
        const posts = await fetch(`/posts.json`).then(res => res.json());
        const post = await fetch(`${url.pathname}.json`).then(res => res.json());
        if (!post || !post.published) {
            return {
                status: 404,
                error: new Error('Post could not be found')
            };
        }
        return {
            props: {
                post,
                posts
            }
        };
    }
</script>

<script lang="ts">
    export let post: any;
    export let posts: any;

    // Components
    import Header from "$lib/components/Header.svelte";
    import NavigationFooter from "$lib/components/NavigationFooter.svelte";
    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<Header />

<Content>
    <h1>{post.title}</h1>
    <h3><b>{post.date}</b></h3>
    <slot />
    <NavigationFooter posts={posts} post={post}/>
    <hr>
</Content>

<style>
    /* Post-Specific Styling */
    h1 {
        text-align: center;
    }

    h3 {
        text-align: center;
        color: var(--color-gray-600);
    }
</style>
