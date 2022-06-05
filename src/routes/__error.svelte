<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `${status}: ${error.message}`,
                status: status,
            }
        };
    }
</script>

<script>
    export let title;
    export let status;

    const img = import.meta.env.VITE_IMAGE_BASE + "/general/404.PNG";
</script>

{#if status === 404}
    <h2>Page Can't be Found!</h2>
    <h4>Here's the <a href="/index">Site Index:</a></h4>

    <p><img src={img} alt="404 Page"></p>
{:else}
    <h1>{title}</h1>
{/if}
