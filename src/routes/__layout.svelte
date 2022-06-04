<script lang="ts">
    import App from "@bojit/svelte-components/core/App/App.svelte";
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

<App theme={palette.quirky} load={load}>
    <slot />
</App>
