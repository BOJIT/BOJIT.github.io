<!--
 * @file +error.svelte
 * @author James Bennion-Pedley
 * @brief Landing page for errors (primarily 404s)
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `${status}: ${error.message}`,
                status: status,
            },
        };
    }
</script>

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { Content } from "@bojit/svelte-components/layout";

    import NavButton from "$lib/components/NavButton.svelte";

    /*--------------------------------- Props --------------------------------*/

    export let title: string;
    export let status: number;

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/404.PNG";
</script>

{#if status === 404}
    <Content>
        <h1>Page Can't be Found!</h1>
        <p class="img-holder"><img src={img} alt="404 Page" /></p>
        <NavButton href="/index">Here's the Site Index</NavButton>
        <hr />
    </Content>
{:else}
    <h1>{title}</h1>
{/if}

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
