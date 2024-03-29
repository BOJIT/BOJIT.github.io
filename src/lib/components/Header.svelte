<!--
 * @file Header.svelte
 * @author James Bennion-Pedley
 * @brief header for all website pages (except home screen)
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { onMount } from "svelte";

    import Theme from "@bojit/svelte-components/theme/theme";
    import { IconButton } from "@bojit/svelte-components/form";
    import { ThemeSelector } from "@bojit/svelte-components/widgets";

    import IconHome from "@svicons/ionicons-outline/home.svelte";
    import IconOptions from "@svicons/ionicons-outline/options.svelte";

    /*--------------------------------- Props --------------------------------*/

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/header.JPG";
    const height = 12; // rem

    let headerImg: HTMLImageElement;
    let fill = false;
    let overlay = false;

    /*-------------------------------- Methods -------------------------------*/

    function remToPx(rem: number) {
        return (
            rem *
            parseFloat(getComputedStyle(document.documentElement).fontSize)
        );
    }

    function calculateHeaderHeight() {
        if (typeof window === "undefined") return;
        if (headerImg.naturalWidth === null) return;

        let ratio = headerImg.naturalWidth / headerImg.naturalHeight;
        fill = window.innerWidth > remToPx(height) * ratio;
    }

    /*------------------------------- Lifecycle ------------------------------*/

    onMount(() => {
        window?.addEventListener("resize", calculateHeaderHeight);

        const loadCheck = setInterval(() => {
            // onLoad hook for image is unreliable with SSR
            if (headerImg.complete) {
                clearInterval(loadCheck);
                calculateHeaderHeight();
            }
        }, 50);
    });
</script>

<ThemeSelector bind:active={overlay} />

<header class:fill>
    <div class="header-action">
        <IconButton
            icon={IconOptions}
            shape="rounded"
            size="2em"
            on:click={() => {
                overlay = true;
            }}
            color="var(--color-background-dark-trans-light)"
            iconColor={$Theme === "light" ? "white" : "var(--color-gray-900)"}
        />
        <IconButton
            icon={IconHome}
            shape="rounded"
            size="2em"
            href="/"
            color="var(--color-background-dark-trans-light)"
            iconColor={$Theme === "light" ? "white" : "var(--color-gray-900)"}
        />
    </div>
    <img bind:this={headerImg} src={img} alt="Page Header" />
</header>

<style>
    header {
        position: relative;
    }

    header:not(.fill) {
        height: 12rem;
    }

    header.fill img {
        width: 100%;
    }

    img {
        object-fit: cover;
        height: 100%;
        margin: 0 auto;
    }

    :global(.mode-dark) img {
        filter: invert(87%);
    }

    .header-action {
        position: absolute;
        z-index: 2;
        right: 0;
        margin: 0.3rem;
    }
</style>
