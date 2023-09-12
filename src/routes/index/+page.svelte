<!--
 * @file +page.svelte
 * @author James Bennion-Pedley
 * @brief Site index
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { PageData } from "./$types";

    import { Content } from "@bojit/svelte-components/layout";
    import Header from "$lib/components/Header.svelte";
    import NavButton from "$lib/components/NavButton.svelte";

    /*--------------------------------- Props --------------------------------*/

    export let data: PageData;

    let categories: string[] = [
        ...new Set(data.posts.map((p) => p.path.split("/")[0])),
    ] as string[];
</script>

<svelte:head>
    <title>Page Index</title>
</svelte:head>

<Header />

<Content>
    <h1>PAGE INDEX</h1>
    {#each categories.sort((a, b) => (a < b ? -1 : 1)) as c}
        <h3>{c.toUpperCase()}</h3>
        <hr />
        {#each data.posts.filter((p) => p.path.startsWith(c)) as p}
            <NavButton href={`/${p.path.slice(0, -".svelte".length)}`}
                >{p.meta.title.toUpperCase()}</NavButton
            >
        {/each}
    {/each}

    <h3>GLOBAL</h3>
    <hr />
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
