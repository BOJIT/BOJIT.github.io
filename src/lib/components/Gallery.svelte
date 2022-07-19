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
    import Saos from "saos";

    import Link from "$lib/components/Link.svelte";
    import Colcade from "$lib/components/utils/colcade";
    import textFit from "$lib/components/utils/textFit";

    type Tile = {
        "type": "image" | "link" | "text",
        "caption": string,
        "subcaption"?: string
        "image"?: string,
        "link"?: string,
        "colour"?: string,
    };

    export let columns = 3;
    export let tiles: Tile[] = [];
    export let gap = "1rem";
    export let animate = false;

    let gallery: HTMLElement;
    let colcade: any = null;

    $: resizeHandler();

    function resizeHandler() {
        if(gallery) {
            colcade?.reload();
            textFit(gallery?.getElementsByClassName('textfit'), {multiline: true});

            // Generate + Reset Pushes
            const pushes = Array.from(gallery?.getElementsByClassName('push')) as any;
            const tileMargin = parseInt(window.getComputedStyle(pushes[0]).getPropertyValue('margin-bottom'));

            // Iterate through gallery to get push gap
            let pHeights: number[] = [];
            pushes.forEach((p: HTMLElement) => {
                let col = p.parentElement;
                col.appendChild(p); // Move to end of DOM

                let tileheight = 0;
                let tiles = Array.from(col.getElementsByClassName('tile'));
                tiles.forEach((t: HTMLElement) => {
                    tileheight += (t.offsetHeight + tileMargin);
                });

                pHeights.push(col.offsetHeight - tileheight);
            });

            // Compute push size
            let minHeight = Math.min(...pHeights);
            let pPush = pHeights.map((h) => {
                h = h - minHeight;

                if(h < tileMargin) {
                    h = 0;
                } else {
                    h = h - tileMargin;
                }

                return h;
            });

            for(let i = 0; i < pushes.length; i++) {
                pushes[i].style.height = `${pPush[i]}px`;
            }
        }
    }

    onMount(() => {
        // Create masonry and assign handler to keep the size correct
        colcade = new Colcade(gallery, {
            columns: '.column',
            items: '.tile'
        });

        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        // HACK remove!
        setTimeout(() => {
            resizeHandler();
        }, 500)
    });
</script>


<div bind:this={gallery} class="gallery" style:gap={gap}>
    {#each {length: columns} as _, i}
        <div class="column" class:first={i == 0}>
            <div class="push" style:margin-bottom={gap}>
                <div class="push-tile"></div>
            </div>
        </div>
    {/each}

    {#each tiles as t}
        <div class="tile" style:margin-bottom={gap}>
            <Link href={t.link ? t.link : null}>
                {#if t.type === "image"}
                <div class="image-holder">
                    <img src={t.image} alt={t.caption}/>
                    <div class="textfit">{t.caption}</div>
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
    }

    .column {
        flex-grow: 1;
    }

    @media (max-width: 768px) {
        .column:not(.first) {
            display: none;
        }
    }

    /* Image Tiles */
    .tile .image-holder {
        position: relative;
    }

    .tile .image-holder img {
        width: 100%;
        transition: opacity 0.2s ease-in;
        -moz-transition: opacity 0.2s ease-in;
        -webkit-transition: opacity 0.2s ease-in;
        -o-transition: opacity 0.2s ease-in;
    }

    .tile .image-holder .textfit {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        text-align: center;
        font-family: var(--font-headings);
        white-space: normal !important;
        overflow-wrap: normal;

        opacity: 0;
        transition: opacity 0.2s ease-in;
        -moz-transition: opacity 0.2s ease-in;
        -webkit-transition: opacity 0.2s ease-in;
        -o-transition: opacity 0.2s ease-in;
    }

    .tile .image-holder:hover img {
        opacity: 0.5;
    }

    .tile .image-holder:hover .textfit {
        opacity: 1;
    }

    /* Text and Link Tiles */
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

    :global(.mode-dark) .tile .text:hover {
        background-color:  whitesmoke !important;
    }

    :global(.mode-dark) .tile .text:hover h2 {
        color: black !important;
    }

    :global(.mode-dark) .tile .text:hover hr {
        border-color: black !important;
    }

    /* Push block */
    .push {
        position: relative;
    }

    .push-tile {
        background-color: var(--color-gray-trans-dark);
        width: 100%;
        height: 100%;
    }

    :global(.mode-dark) .push-tile {
        background-color: var(--color-gray-trans-light);
    }

    @media (max-width: 768px) {
        .push {
            display: none;
        }
    }

    @keyframes -global-float-up {
        0% {
        transform: translateY(500px);
        opacity: 0;
        }
        100% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        }
    }
</style>
