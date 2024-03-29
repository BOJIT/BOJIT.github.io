<!--
 * @file Footer.svelte
 * @author James Bennion-Pedley
 * @brief Website footer
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { onMount, SvelteComponent } from "svelte";

    import { IconButton } from "@bojit/svelte-components/form";
    import Theme from "@bojit/svelte-components/theme";

    // Icons
    import LogoYoutube from "@svicons/ionicons-solid/logo-youtube.svelte";
    import LogoLinkedin from "@svicons/ionicons-solid/logo-linkedin.svelte";
    import LogoGithub from "@svicons/ionicons-solid/logo-github.svelte";
    import LogoFacebook from "@svicons/ionicons-solid/logo-facebook.svelte";
    import LogoSoundcloud from "@svicons/ionicons-solid/logo-soundcloud.svelte";

    /*--------------------------------- Props --------------------------------*/

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/footer.JPG";
    const height = 12; // rem

    type Social = {
        icon: typeof SvelteComponent;
        link: string;
        label?: string;
    };

    const socials: Social[] = [
        {
            icon: LogoYoutube,
            link: "https://www.youtube.com/channel/UCR7zc0TblvkjPy9DhAWUkvA",
            label: "Link to YouTube Channel",
        },
        {
            icon: LogoLinkedin,
            link: "https://www.linkedin.com/in/james-bennion-pedley-bab14a146/",
            label: "Link to LinkedIn Page",
        },
        {
            icon: LogoGithub,
            link: "https://github.com/BOJIT",
            label: "Link to GitHub Profile",
        },
        {
            icon: LogoFacebook,
            link: "https://www.facebook.com/James.BOJIT",
            label: "Link to Facebook Profile",
        },
        {
            icon: LogoSoundcloud,
            link: "https://soundcloud.com/james-bojit",
            label: "Link to SoundCloud Profile",
        },
    ];

    let footerImg: HTMLImageElement;
    let fill = false;

    /*-------------------------------- Methods -------------------------------*/

    function remToPx(rem: number) {
        return (
            rem *
            parseFloat(getComputedStyle(document.documentElement).fontSize)
        );
    }

    function calculateFooterHeight() {
        if (typeof window !== "undefined") {
            let ratio = footerImg.naturalWidth / footerImg.naturalHeight;
            fill = window.innerWidth > remToPx(height) * ratio;
        }
    }

    /*------------------------------- Lifecycle ------------------------------*/

    onMount(() => {
        window?.addEventListener("resize", calculateFooterHeight);

        const loadCheck = setInterval(() => {
            // onLoad hook for image is unreliable with SSR
            if (footerImg.complete) {
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
                <IconButton
                    icon={s.icon}
                    shape="circle"
                    size="2.2em"
                    href={s.link}
                    newTab
                    color={$Theme === "light"
                        ? "var(--color-dark-700)"
                        : "#474c54"}
                    label={s.label}
                />
            {/each}
        </div>
        <h6>&copy; BOJIT {new Date().getFullYear()}</h6>
    </div>
    <img bind:this={footerImg} src={img} alt="Page Footer" />
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
