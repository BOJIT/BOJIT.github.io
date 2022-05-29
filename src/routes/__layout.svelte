<script lang="ts">
    import App from "@bojit/svelte-components/core/App/App.svelte";
    import Theme, { palette } from "@bojit/svelte-components/theme";
    const mode = Theme.Mode;
    $mode = 'light';

    import "$lib/app.css";
</script>

<App theme={palette.quirky}>
    <slot />
</App>
