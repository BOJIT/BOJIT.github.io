<script lang="ts">
    import Dialog from "@bojit/svelte-components/smelte/components/Dialog/Dialog.svelte";
    import IconButton from "./IconButton.svelte";

    import Theme, { palette } from "@bojit/svelte-components/theme";
    const mode = Theme.Mode;

    export let active = false;

    function handleKeydown(event: KeyboardEvent) {
        if((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            active = true;
        } else if(event.key === 'Escape') {
            if(active) {
                event.preventDefault();
                active = false;
            }
        }
    }

    // Icons
    import SunnyOutline from "@svicons/ionicons-outline/sunny.svelte";
    import MoonOutline from "@svicons/ionicons-outline/moon.svelte";
    import ContrastOutline from "@svicons/ionicons-outline/contrast.svelte";

    function setTheme(target) {

    }

    const col = "rgba(120, 120, 120, 0.5)";
    const col_focus = "rgba(180, 180, 180, 0.5)";

</script>

<svelte:window on:keydown={handleKeydown}/>

<Dialog bind:value={active}>
    <!-- <h6 slot="title">Select Theme</h6> -->
    <div class="option">
        <IconButton logo={SunnyOutline} color={$mode === 'light' ? col_focus : col}
        size="5em" disabled={$mode === 'light'} on:click={() => {
            $mode = "light";
        }}/>
        <IconButton logo={MoonOutline} color={$mode === 'dark' ? col_focus : col}
        size="5em" disabled={$mode === 'dark'} on:click={() => {
            $mode = "dark";
        }}/>
        <IconButton logo={ContrastOutline} color={$mode === 'auto' ? col_focus : col}
        size="5em" disabled={$mode === 'auto'} on:click={() => {
            $mode = "auto";
        }}/>
    </div>
</Dialog>

<style>
    .option {
        display: flex;
        gap:1rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>

