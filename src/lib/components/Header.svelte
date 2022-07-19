<script lang="ts">
    import { onMount } from "svelte";
    import Theme from "@bojit/svelte-components/theme/theme";

    import ThemeSelector from "$lib/components/ThemeSelector.svelte";
    import IconButton from "@bojit/svelte-components/form/IconButton/IconButton.svelte";

    import LogoHome from "@svicons/ionicons-outline/home.svelte";
    import LogoOptions from "@svicons/ionicons-outline/options.svelte";

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/header.JPG";
    const height = 12; // rem

    let headerImg: HTMLImageElement;
    let fill = false;
    let overlay = false;

    function remToPx(rem: number) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    function calculateHeaderHeight() {
        if(typeof window !== 'undefined') {
            let ratio = headerImg.naturalWidth/headerImg.naturalHeight;
            fill = (window.innerWidth > remToPx(height)*ratio);
        }
    }

    onMount(() => {
        window?.addEventListener('resize', calculateHeaderHeight);

        const loadCheck = setInterval(() => {
            // onLoad hook for image is unreliable with SSR
            if(headerImg.complete) {
                clearInterval(loadCheck);
                calculateHeaderHeight();
            }
        }, 50);
    });
</script>

<ThemeSelector bind:active={overlay}/>

<header class:fill>
    <div class="header-action">
        <IconButton logo={LogoOptions} shape="rounded" size="2em"
        on:click={() => {overlay = true}}
        color="var(--color-background-dark-trans-light)"
        iconColor={$Theme === 'light' ? "white" : "var(--color-gray-900)"}/>
        <IconButton logo={LogoHome} shape="rounded" size="2em"
            href = "/"
            color="var(--color-background-dark-trans-light)"
            iconColor={$Theme === 'light' ? "white" : "var(--color-gray-900)"}/>
    </div>
    <img bind:this={headerImg} src={img} alt="Page Header"/>
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
