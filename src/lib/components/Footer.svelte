<script lang="ts">
    import { onMount } from "svelte";

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/footer.JPG";

    let footerImg: HTMLImageElement;
    let fill = false;

    const height = 12; // rem

    function remToPx(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    function calculateFooterHeight() {
        if(typeof window !== 'undefined') {
            let ratio = footerImg.naturalWidth/footerImg.naturalHeight;
            fill = (window.innerWidth > remToPx(height)*ratio);
            console.log(window.innerWidth);
            console.log(remToPx(height)*ratio);
        }
    }

    onMount(() => {
        if(typeof window !== 'undefined') {
            calculateFooterHeight();
            window.addEventListener('resize', calculateFooterHeight);
        }
    });
</script>

<footer class:fill>
    <img bind:this={footerImg} src={img} alt="Page Footer">
</footer>

<style>
    footer {
        /* Self */
        flex: 0 0 auto;
        align-self: end;
        width: 100%;
    }

    footer:not(.fill) {
        height: 12rem;
    }

    footer.fill img {
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
</style>
