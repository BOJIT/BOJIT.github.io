<!--
 * @file Gallery.svelte
 * @author James Bennion-Pedley
 * @brief Gallery Component for Images with Labels
 * @date 13/07/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    import { onMount } from "svelte";

    import Link from "$lib/components/Link.svelte";
    import Colcade from "$lib/components/colcade/colcade";

    type Tile = {
        "type": "image" | "link" | "text",
        "image": string,
        "caption": string,
        "subcaption"?: string
        "link"?: string,
        "colour"?: string,
    };

    export let columns = 3;
    export let tiles: Tile[] = [];

    let gallery: HTMLElement;
    let colcade: any = null;

    $: colcade?.reload();

    onMount(() => {
        colcade = new Colcade(gallery, {
            columns: '.column',
            items: '.tile'
        });

        setTimeout(() => {
            colcade.reload();
        }, 100)
    });
</script>


<div bind:this={gallery} class="gallery">
    {#each {length: columns} as _, i}
        <div class="column" class:first={i == 0}></div>
    {/each}

    {#each tiles as t}
        <div class="tile">
            <Link href={t.link ? t.link : null}>
                {#if t.type === "image"}
                <div class="image-holder">
                    <img src={t.image} alt={t.caption}/>
                </div>
                {:else if t.type === "text"}
                <div style:background-color={t.colour} class="text">
                    <h2>{t.caption}</h2>
                </div>
                {:else if t.type === "link"}
                <div style:background-color={t.colour} class="text">
                    <h2>{t.caption}</h2>
                    <hr>
                    <h4>{t.subcaption}</h4>
                </div>
                {/if}
            </Link>
        </div>
    {/each}
</div>


<style>
    .gallery {
        display: flex;
        gap: 1rem;
    }

    .column {
        flex-grow: 1;
    }

    @media (max-width: 768px) {
        .column:not(.first) {
            display: none;
        }
    }

    .tile {
        margin-bottom: 1rem;
    }

    .tile img {
        width: 100%;
    }

    .tile .text {
        padding-left: 1.8rem;
        padding-right: 1.8rem;
        transition: background-color 0.2s ease-in;
        -moz-transition: background-color 0.2s ease-in;
        -webkit-transition: background-color 0.2s ease-in;
        -o-transition: background-color 0.2s ease-in;
    }

    .tile .text h2, h4 {
        text-align: center;
        margin: 0;
        padding: 15px;
        transition: color 0.2s ease-in;
        -moz-transition: color 0.2s ease-in;
        -webkit-transition: color 0.2s ease-in;
        -o-transition: color 0.2s ease-in;
    }

    .tile h2 {
        font-size: 1.8rem;
        color: black;
    }

    .tile h4 {
        font-size: 1.3rem;
        color: var(--color-gray-600);
    }

    .tile hr {
        margin: 0;
        border-color: white;
        height: 1px;
        transition: border-color 0.2s ease-in;
        -moz-transition: border-color 0.2s ease-in;
        -webkit-transition: border-color 0.2s ease-in;
        -o-transition: border-color 0.2s ease-in;
    }

    .tile .text:hover {
        background-color: black !important;
    }

    .tile .text:hover h2 {
        color: whitesmoke !important;
    }

    .mode-dark .tile .text:hover {
        background-color:  whitesmoke !important;
    }

    .mode-dark .tile .text:hover h2 {
        color: black !important;
    }

    .mode-dark .tile .text:hover hr {
        border-color: black !important;
    }
</style>
