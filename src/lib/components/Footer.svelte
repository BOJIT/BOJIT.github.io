<script lang="ts">
    import { onMount } from "svelte";
    import Button from "@bojit/svelte-components/smelte/components/Button/Button.svelte";
    import Theme from "@bojit/svelte-components/theme/theme";

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/footer.JPG";
    const height = 12; // rem

    type Social = {
        "icon": string,
        "link"?: string,
    }

    const socials: Social[] = [
        {
            "icon": "settings"
        },
        {
            "icon": "settings"
        },
        {
            "icon": "settings"
        },
        {
            "icon": "settings"
        },
        {
            "icon": "settings"
        },
    ]


    let footerImg: HTMLImageElement;
    let fill = false;

    function remToPx(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    function calculateFooterHeight() {
        if(typeof window !== 'undefined') {
            let ratio = footerImg.naturalWidth/footerImg.naturalHeight;
            fill = (window.innerWidth > remToPx(height)*ratio);
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
    <div class="footer-action">
        <div class="socials">
            {#each socials as s}
                <Button icon='settings' circle color={$Theme === 'dark' ? 'primary' : 'black'}/>
            {/each}
        </div>
        <h6>&copy; BOJIT {new Date().getFullYear()}</h6>
    </div>
    <img bind:this={footerImg} src={img} alt="Page Footer">
</footer>

<style>
    footer {
        /* Self */
        flex: 0 0 auto;
        align-self: end;
        width: 100%;
        position: relative;
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
        margin-top: 1.5rem;
    }

    :global(.mode-dark) img {
        filter: invert(87%);
    }

    h6 {
        text-align: center;
        color: var(--color-gray-400);
    }

    :global(.mode-dark) h6 {
        color: var(--color-gray-700);

    }

    .socials {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .footer-action {
        width: 100%;
        position: absolute;
        z-index: 2;
    }
</style>
