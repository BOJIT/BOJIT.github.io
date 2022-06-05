<script lang="ts">
    export let src = "";
    export let autoplay = false;
    export let playlist = "";

    let url: string[] = [];
    $: url = [
        src,
        "?version=3",
        "&modestbranding=1",
        autoplay ? "&autoplay=1&loop=1&controls=0&mute=1" : "",
        playlist !== "" ? `&playlist=${playlist}` : "",
    ];
</script>

<div class="youtube-container">
    <div class="aspect-ratio">
        <iframe title="youtube-video" type="text/html" src={url.join("")} frameborder="0"></iframe>
    </div>
</div>

<style>
    /* Containers for YouTube videos (forced aspect ratio) */
    .aspect-ratio {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; /* 9/16 * 100% */
        margin-top: 10px;
        margin-bottom: 10px;
        display: block;
        margin: 0 auto;
    }

    /* YouTube embed */
    .aspect-ratio iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0; top: 0;
    }
</style>
