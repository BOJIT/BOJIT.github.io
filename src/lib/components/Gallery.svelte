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

    import Colcade from "$lib/components/colcade/colcade";

    type Tile = {
        "type": "image" | "link" | "text",
        "image": string,
        "caption": string,
        "link?": string
    };

    export let columns = 3;
    export let tiles: Tile[] = [];

    let gallery: HTMLElement;

    onMount(() => {
        const colcade = new Colcade(gallery, {
            columns: '.column',
            items: '.tile'
        });
    });
</script>


<div bind:this={gallery} class="gallery">
    {#each {length: columns} as _, i}
        <div class="column"></div>
    {/each}

    {#each tiles as t}
        <div class="tile">
            {#if t.type === "image"}
                <div>
                    <img src={t.image} alt={t.caption}/>
                </div>
            {:else if t.type === "link"}
            <div>
                <h2>LINK</h2>
            </div>
            {:else if t.type === "text"}
            <div>
                <h2>TEST</h2>
                <hr>
                <h4>DATE</h4>
            </div>
            {/if}
        </div>
    {/each}
</div>


<style>
    .gallery {
        display: flex;
    }
    .column {
        flex-grow: 1;
    }
</style>
