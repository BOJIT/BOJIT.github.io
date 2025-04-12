<!--
 * @file +layout.svelte
 * @author James Bennion-Pedley
 * @brief Populates information for all content pages
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { PageData } from './$types';

    import { Content } from '@bojit/svelte-components/layout';

    import Header from '$lib/components/Header.svelte';
    import NavigationFooter from '$lib/components/NavigationFooter.svelte';

    /*--------------------------------- Props --------------------------------*/

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
    <meta property="og:title" content={data.metadata.title} />
    <meta property="og:type" content="article" />
    <!-- Ensure that tile is thumbnail when sharing article -->
    {#if data.metadata.tile.type === 'image'}
        <meta
            property="og:image"
            content={`${import.meta.env.VITE_IMAGE_BASE}${data.metadata.tile.image}`}
        />
    {/if}
</svelte:head>

<Header />

<Content>
    <h1>{data.metadata.title}</h1>
    <h3><b>{data.metadata.date}</b></h3>

    {#if data.metadata.hidden}
        <blockquote>This is an unpublished article!</blockquote>
        <br />
    {/if}

    <svelte:component this={data.content} />
    <NavigationFooter posts={data.posts} post={data.metadata} />
    <hr />
</Content>

<style>
    /* Post-Specific Styling */
    h1 {
        text-align: center;
    }

    h3 {
        text-align: center;
        color: var(--color-gray-600);
    }
</style>
