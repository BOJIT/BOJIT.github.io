<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ url, fetch }) {
        const posts = await fetch(`/posts.json`).then((res) => res.json());
        const post = await fetch(`${url.pathname}.json`).then((res) =>
            res.json()
        );
        if (!post || !post.published) {
            return {
                status: 404,
                error: new Error("Post could not be found"),
            };
        }
        return {
            props: {
                post,
                posts,
            },
        };
    }
</script>

<script lang="ts">
    export let post: any;
    export let posts: any;

    // Components
    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";
    import Header from "$lib/components/Header.svelte";
    import NavigationFooter from "$lib/components/NavigationFooter.svelte";
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<Header />

<Content>
    <h1>{post.title}</h1>
    <h3><b>{post.date}</b></h3>
    <slot />
    <NavigationFooter {posts} {post} />
    <hr />
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

    /* TODO remove when updating SvelteKit */
    /* Block Quotes Polyfill*/
    :global(article) > :global(blockquote) {
        border-left: 4px solid var(--color-primary-400);
        padding: 1rem;
        font-style: bold;
        color: var(--color-primary-900);
        background-color: var(--color-primary-trans-dark);
    }

    :global(.mode-dark) :global(article) > :global(blockquote) {
        color: var(--color-primary-200);
        background-color: var(--color-primary-trans-light);
    }
</style>
