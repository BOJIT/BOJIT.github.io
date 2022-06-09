<script lang="ts">
    // Components
    import ThemeSelector from "$lib/components/ThemeSelector.svelte";
    import NavBar from "@bojit/svelte-components/layout/NavBar/NavBar.svelte";
    import type { NavItem } from "@bojit/svelte-components/layout/NavBar/NavBar.svelte";

    let overlay = false;

    function settings() {
        overlay = true;
    }

    let items: NavItem[] = [
        {
            type: "button",
            color: "transparent",
            icon: "settings",
            callback: settings
        },
    ];
</script>

<ThemeSelector bind:active={overlay}/>

<NavBar title="BOJIT" items={items} />
