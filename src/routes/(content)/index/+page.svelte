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

    // Components
    import Header from "$lib/components/Header.svelte";
    import NavButton from "$lib/components/NavButton.svelte";
    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";

    let categories: string[] = [...new Set(posts.map(p => p.path.split("/")[0]))] as string[];
</script>

<svelte:head>
    <title>Page Index</title>
</svelte:head>

<Header />

<Content>
    <h1>PAGE INDEX</h1>
    {#each categories.sort((a, b) => a < b ? -1 : 1) as c}
        <h3>{c.toUpperCase()}</h3>
        <hr>
        {#each posts.filter(p => p.path.startsWith(c)) as p}
            <NavButton href={p.path.slice(0, -".svelte".length)}>{p.meta.title.toUpperCase()}</NavButton>
        {/each}
    {/each}

    <h3>GLOBAL</h3>
    <hr>
    <NavButton href="/about">ABOUT</NavButton>
    <NavButton href="/">HOME</NavButton>
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
