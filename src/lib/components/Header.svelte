<script lang="ts">
    // State
    import Theme from "@bojit/svelte-components/theme";
    const mode = Theme.Mode;

    // Components
    import NavBar from "@bojit/svelte-components/layout/NavBar/NavBar.svelte";
    import type { NavItem } from "@bojit/svelte-components/layout/NavBar/NavBar.svelte";

    function toggleTheme() {
        if($mode == 'light')
            $mode = 'dark';
        else
            $mode = 'light';
    }

    let items: NavItem[] = [
        {
            type: "button",
            color: "transparent",
            icon: "light_mode",
            callback: toggleTheme
        },
    ];
</script>

<NavBar title="BOJIT" items={items} />
