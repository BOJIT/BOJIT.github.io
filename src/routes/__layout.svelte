<script lang="ts">
    import App from "@bojit/svelte-components/core/App/App.svelte";
    import Main from "@bojit/svelte-components/layout/Main/Main.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Analytics from "$lib/components/Analytics.svelte";

    import Theme, { palette } from "@bojit/svelte-components/theme";
    const mode = Theme.Mode;
    $mode = 'auto';    // Default Mode if no stored state is present

    import "$lib/app.css";
    import storage from "$lib/stores/storage";

    async function load(resolve, reject) {
        await storage.init();
        resolve();
    }
</script>

<Analytics />

<App theme={palette.quirky} load={load}>
    <Main>
        <slot />
    </Main>
    <Footer />
</App>
