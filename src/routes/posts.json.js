export const get = async () => {
    const allPostFiles = import.meta.glob('./**.svelte.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    let allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(2, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    // If in production, filter out unpublished articles
    if(import.meta.env.PROD) {
        allPosts = allPosts.filter((p) => {
            return p.meta.published === true;
        })
    }

    const sortedPosts = allPosts.sort((a, b) => {
        let a_split = a.meta.date.split("-");
        let a_date = new Date(a_split[2], a_split[1] - 1, a_split[0]);
        let b_split = b.meta.date.split("-");
        let b_date = new Date(b_split[2], b_split[1] - 1, b_split[0]);
        return b_date.getTime() - a_date.getTime()
    })

    return {
        body: sortedPosts
    }
}
