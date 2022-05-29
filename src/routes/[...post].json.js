/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
    const modules = import.meta.glob(`./galleries/*.svelte.md`);

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
