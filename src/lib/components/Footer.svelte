<script lang="ts">
    import { onMount } from "svelte";

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/footer.JPG";

    let footerImg: HTMLImageElement;
    let float = false;

    function calculateFooterHeight() {
        if(typeof window !== 'undefined') {
            float = (window.innerWidth <= footerImg.naturalWidth);
        }
    }

    onMount(() => {
        if(typeof window !== 'undefined') {
            calculateFooterHeight();
            window.addEventListener('resize', calculateFooterHeight);
        }
    });
</script>

<footer class:float>
    <img bind:this={footerImg} src={img} alt="Page Footer">
</footer>

<style>
    footer {
        /* Self */
        flex: 0 0 auto;
        align-self: end;
        width: 100%;
        background-color: red;
    }

    footer.float {
        height: 30vh;
    }

    footer:not(.float) img {
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
