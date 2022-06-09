<script lang="ts">
    import type { SvelteComponent } from 'svelte/internal';

    import Dialog from "@bojit/svelte-components/smelte/components/Dialog/Dialog.svelte";
    import IconButton from "./IconButton.svelte";

    import Theme, { palette } from "@bojit/svelte-components/theme";
    const mode = Theme.Mode;

    // Icons
    import SunnyOutline from "@svicons/ionicons-outline/sunny.svelte";
    import MoonOutline from "@svicons/ionicons-outline/moon.svelte";
    import ContrastOutline from "@svicons/ionicons-outline/contrast.svelte";

    type Theme = {
        "theme": 'light' | 'dark' | 'auto',
        "logo": SvelteComponent
    }

    const themes: Theme[] = [
        {
            "theme": 'light',
            "logo": SunnyOutline,
        },
        {
            "theme": 'dark',
            "logo": MoonOutline,
        },
        {
            "theme": 'auto',
            "logo": ContrastOutline,
        },
    ]

    const col = "rgba(120, 120, 120, 0.5)";
    const col_focus = "rgba(180, 180, 180, 0.5)";

    export let active = false;
    let idx = 0;

    function handleKeydown(event: KeyboardEvent) {
        if((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            active = true;
        } else if(event.key === 'Escape' || event.key === 'Enter') {
            if(active) {
                event.preventDefault();
                active = false;
            }
        } else if(event.key === 'Tab' || event.key === 'ArrowRight') {
            if(active) {
                event.preventDefault();
                let i = (idx === themes.length - 1) ? 0 : idx + 1;
                $mode = themes[i].theme;
                idx = i;
            }
        } else if(event.key === 'ArrowLeft') {
            if(active) {
                event.preventDefault();
                let i = (idx === 0) ? (themes.length - 1) : idx - 1;
                $mode = themes[i].theme;
                idx = i;
            }
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<Dialog bind:value={active}>
    <!-- <h6 slot="title">Select Theme</h6> -->
    <div class="option">
        {#each themes as t, i}
            <IconButton logo={t.logo} color={$mode === t.theme ? col_focus : col}
            size="5em" disabled={$mode === t.theme} on:click={() => {
                $mode = t.theme;
                idx = i;
            }}/>
        {/each}
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

