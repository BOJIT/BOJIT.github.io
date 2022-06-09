<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { SvelteComponent } from 'svelte/internal';
    // import createRipple from "@bojit/svelte-components/smelte/components/Ripple/ripple.js";

    const dispatch = createEventDispatcher();

    export let logo: SvelteComponent;
    export let href: string = null;
    export let newTab = false;
    export let disabled = false;

    // Style
    export let size: string = "2.5em";
    export let shape: 'circle' | 'square' | 'rounded' = 'rounded';
    export let color: string = "var(--color-primary-500)";
    export let iconColor: string = "white";
</script>

{#if href}
<a {href} target={newTab ? "_blank" : ""}>
    <button disabled={disabled} class="{shape}" class:hoverable={!disabled} style="background-color: {color}"
        on:click={() => {dispatch('click');}}>
        <svelte:component this={logo} height={size} color={iconColor}/>
    </button>
</a>
{:else}
<button disabled={disabled} class="{shape}" class:hoverable={!disabled} style="background-color: {color}"
    on:click={() => {dispatch('click');}}>
    <svelte:component this={logo} height={size} color={iconColor}/>
</button>
{/if}

<style>
    button {
        padding: 0.7rem;
        transition: filter 0.2s;
    }

    button.hoverable:hover {
        filter: brightness(160%);
    }

    button.circle {
        border-radius: 50%;
    }

    button.square {
        border-radius: 0%;
    }

    button.rounded {
        border-radius: 0.5rem;
    }
</style>
