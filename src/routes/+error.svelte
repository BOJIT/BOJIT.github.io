<!--
 * @file +error.svelte
 * @author James Bennion-Pedley
 * @brief Landing page for errors (primarily 404s)
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { Content } from "@bojit/svelte-components/layout";

    import NavButton from "$lib/components/NavButton.svelte";

    import { page } from "$app/stores";

    /*--------------------------------- Props --------------------------------*/

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/404.PNG";
</script>

<Content>
    {#if $page.status === 404}
        <h1>Page Can't be Found!</h1>
        <p class="img-holder"><img src={img} alt="404 Page" /></p>
        <NavButton href="/index">Here's the Site Index</NavButton>
        <hr />
    {:else}
        <h1>{$page.error?.message} ({$page.status})</h1>
    {/if}
</Content>

<style>
    h1 {
        text-align: center;
        padding: 1rem;
    }

    .img-holder {
        display: flex;
        justify-content: center;
    }

    .img-holder img {
        width: 500px;
    }

    @media (max-width: 768px) {
        .img-holder img {
            width: 90%;
        }
    }
</style>
