<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ url, fetch }) {
        const post = await fetch(`${url.pathname}.json`).then(res => res.json());
        if (!post || !post.published) {
            return {
                status: 404,
                error: new Error('Post could not be found')
            };
        }
        return {
            props: {
                post
            }
        };
    }
</script>

<script lang="ts">
    // State
    import Theme from "@bojit/svelte-components/theme";
    const mode = Theme.Mode;

    // Components
    import Content from "@bojit/svelte-components/layout/Content/Content.svelte";
    import NavBar from "@bojit/svelte-components/layout/NavBar/NavBar.svelte";
    import type { NavItem } from "@bojit/svelte-components/layout/NavBar/NavBar.svelte";

    export let post;

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

<Content>
    <h1>{post.title}</h1>
    <h2>{post.date}</h2>
    <slot />
</Content>
