<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let href = null;
    export let newTab = false;
</script>

{#if href}
<a {href} target={newTab ? "_blank" : ""}>
    <button on:click={() => {dispatch('click');}}>
        <h2>
            <slot />
        </h2>
    </button>
</a>
{:else}
<button on:click={() => {dispatch('click');}}>
    <h2>
        <slot />
    </h2>
</button>
{/if}

<style>
    button {
        width: 100%;
        text-decoration: none;
        border: 1px solid  var(--color-gray-600);
        background-color: transparent;
        color: black;
        transition: background-color 0.2s ease-in, border-color 0.2s ease-in;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    :global(.mode-dark) button {
        border-color: var(--color-gray-800);
        color: white;
    }

    button:hover {
        background-color: black;
        border-color: black;
        color: white;
    }

    :global(.mode-dark) button:hover {
        background-color: white;
        border-color: white;
        color: black;
    }

    h2 {
        margin: 1rem 2rem !important;
        font-size: 2rem !important;
        transition: color 0.2s ease-in;
    }
</style>
