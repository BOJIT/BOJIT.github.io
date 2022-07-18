<!--
 * @file Link.svelte
 * @author James Bennion-Pedley
 * @brief Convenience Wrapper for elements that may be wrapped by links
 * @date 18/07/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang='ts'>
    export let href = null;
</script>


{#if href !== null}
    <a href={href}>
        <slot />
    </a>
{:else}
    <slot />
{/if}
