<!--
 * @file NavigationFooter.svelte
 * @author James Bennion-Pedley
 * @brief Set of navigation buttons attached to post footers
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { goto } from "$app/navigation";

    import NavButton from "$lib/components/NavButton.svelte";

    /*--------------------------------- Props --------------------------------*/

    export let posts: object[];
    export let post: object;

    /*-------------------------------- Methods -------------------------------*/

    function gotoPage(idx: number) {
        let url = posts[idx].path.slice(0, -".svelte".length);
        goto("/" + url);
    }

    function currentPost() {
        return posts.map((p) => p.meta.title).findIndex((t) => t == post.title);
    }

    function randomPost() {
        let idx = currentPost();
        while (idx == currentPost())
            idx = Math.floor(Math.random() * posts.length);

        gotoPage(idx);
    }
</script>

<div class="nav">
    {#if currentPost() != posts.length - 1}
        <NavButton on:click={() => gotoPage(currentPost() + 1)}
            >PREVIOUS</NavButton
        >
    {/if}
    <NavButton href="/index">INDEX</NavButton>
    <NavButton href="/">HOME</NavButton>
    <NavButton on:click={randomPost}>RANDOM</NavButton>
    {#if currentPost() != 0}
        <NavButton on:click={() => gotoPage(currentPost() - 1)}>NEXT</NavButton>
    {/if}
</div>

<style>
    .nav {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 1200px) {
        .nav {
            display: block;
        }
    }
</style>
