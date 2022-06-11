<script lang="ts">
    import NavButton from "./NavButton.svelte";

    export let posts: object[];
    export let post: object;

    function gotoPage(idx) {
        let url = posts[idx].path.slice(0, -".svelte".length);
        window.location.href = "/" + url;
    }

    function currentPost() {
        return posts.map((p) => p.meta.title).findIndex(t => (t==post.title));
    }

    function previousPost() {
        let url = posts[currentPost() + 1].path.slice(0, -".svelte".length);
        window.location.href = "/" + url;
    }

    function randomPost() {
        let idx = currentPost();
        while (idx == currentPost())
            idx = Math.floor(Math.random() * posts.length);

        gotoPage(idx);
    }

    function nextPost() {
        let url = posts[currentPost() - 1].path.slice(0, -".svelte".length);
        window.location.href = "/" + url;
    }
</script>

<div class="nav">
    {#if currentPost() != posts.length - 1 }
        <NavButton on:click={() => gotoPage(currentPost() + 1)}>PREVIOUS</NavButton>
    {/if}
    <NavButton href="/index">INDEX</NavButton>
    <NavButton href="/">HOME</NavButton>
    <NavButton on:click={randomPost}>RANDOM</NavButton>
    {#if currentPost() != 0 }
        <NavButton on:click={() => gotoPage(currentPost() - 1)}>NEXT</NavButton>
    {/if}
</div>

<style>
    .nav {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 1200px) {
        .nav {
            display: block;
        }
    }
</style>
