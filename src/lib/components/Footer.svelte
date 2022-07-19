<script lang="ts">
    import { onMount, SvelteComponent } from "svelte";
    import Theme from "@bojit/svelte-components/theme/theme";
    import IconButton from "@bojit/svelte-components/form/IconButton/IconButton.svelte";

    // Icons
    import LogoYoutube from "@svicons/ionicons-solid/logo-youtube.svelte";
    import LogoLinkedin from "@svicons/ionicons-solid/logo-linkedin.svelte";
    import LogoGithub from "@svicons/ionicons-solid/logo-github.svelte";
    import LogoFacebook from "@svicons/ionicons-solid/logo-facebook.svelte";
    import LogoSoundcloud from "@svicons/ionicons-solid/logo-soundcloud.svelte";

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/footer.JPG";
    const height = 12; // rem

    type Social = {
        "icon": SvelteComponent,
        "link": string,
    }

    const socials: Social[] = [
        {
            "icon": LogoYoutube,
            "link": "https://www.youtube.com/channel/UCR7zc0TblvkjPy9DhAWUkvA"
        },
        {
            "icon": LogoLinkedin,
            "link": "https://www.linkedin.com/in/james-bennion-pedley-bab14a146/"
        },
        {
            "icon": LogoGithub,
            "link": "https://github.com/BOJIT"
        },
        {
            "icon": LogoFacebook,
            "link": "https://www.facebook.com/James.BOJIT"
        },
        {
            "icon": LogoSoundcloud,
            "link": "https://soundcloud.com/james-bojit"
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
        window?.addEventListener('resize', calculateFooterHeight);

        const loadCheck = setInterval(() => {
            // onLoad hook for image is unreliable with SSR
            if(footerImg.complete) {
                clearInterval(loadCheck);
                calculateFooterHeight();
            }
        }, 50);
    });
</script>

<footer class:fill>
    <div class="footer-action">
        <div class="socials">
            {#each socials as s}
                <IconButton logo={s.icon} shape="circle" size="2.2em" href={s.link} newTab
                    color={$Theme === 'light' ? "var(--color-dark-700)" : "#474c54"} />
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
        margin-top: 2rem;
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
        gap: 2.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 500px) {
        .socials {
            gap: 1.5rem;
        }
    }

    @media (max-width: 400px) {
        .socials {
            gap: 0.8rem;
        }
    }

    .footer-action {
        width: 100%;
        position: absolute;
        top: -2rem;
        z-index: 2;
    }
</style>
