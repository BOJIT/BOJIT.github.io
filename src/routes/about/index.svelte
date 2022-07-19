<script lang="ts">
    // Components
    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";
    import Header from "$lib/components/Header.svelte";
    import CircleCaption from "$lib/components/CircleCaption.svelte";
    import NavButton from "$lib/components/NavButton.svelte";
</script>

<Header />

<Content>

<h1>About Me</h1>
<hr>

<CircleCaption img={`${import.meta.env.VITE_IMAGE_BASE}/general/profile_small.JPG`}>
    Hi, I am James Bennion-Pedley. I'm an Electronics and Software Hobbyist, and a CNC enthusiast. When not working on my various DIY creations I am an undergraduate at the <i>Dyson Institute of Engineering and Technology</i>. This website shows a selection of projects I have been working on, along with a few tutorials as well. Many of the projects here are open-source, with source code and schematics available on <i>GitHub</i>.

    <hr>
    <div class="buttons">
        <NavButton>CONTACT ME</NavButton>
        <NavButton href={`${import.meta.env.VITE_FILE_BASE}/CV_James_Bennion-Pedley_02.09.19.pdf`}>DOWNLOAD CV</NavButton>
    </div>
</CircleCaption>

<hr>

</Content>


<style>
    h1 {
        text-align: center;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }
</style>
