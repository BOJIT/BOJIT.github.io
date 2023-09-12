/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
    const projects = import.meta.glob('./projects/**.svelte.md');
    const tutorials = import.meta.glob('./tutorials/**.svelte.md');
    const galleries = import.meta.glob('./galleries/**.svelte.md');

    const modules = { ...projects, ...tutorials, ...galleries };

    let match;
    for (const [path, resolver] of Object.entries(modules)) {
        const postname = path.slice(2, -".svelte.md".length);
        if (postname === params.post) {
            match = [path, resolver];
            break;
        }
    }

    if (!match) {
        return {
            status: 404
        };
    }

    const post = await match[1]();

    return {
        body: post.metadata
    };
}
