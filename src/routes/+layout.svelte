<!--
 * @file +layout.svelte
 * @author James Bennion-Pedley
 * @brief Layout for all website pages
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import { App } from "@bojit/svelte-components/core";
    import { Main } from "@bojit/svelte-components/layout";
    import Theme, { palette } from "@bojit/svelte-components/theme";

    import Footer from "$lib/components/Footer.svelte";
    import Analytics from "$lib/components/Analytics.svelte";

    import "$lib/app.css";
    import storage from "$lib/stores/storage";

    /*--------------------------------- Props --------------------------------*/

    const mode = Theme.Mode;
    $mode = "auto"; // Default Mode if no stored state is present

    /*------------------------------- Lifecycle ------------------------------*/

    async function load(resolve, reject) {
        await storage.init();
        resolve();
    }
</script>

<Analytics />

<App theme={palette.quirky} {load}>
    <Main>
        <slot />
    </Main>
    <Footer />
</App>
