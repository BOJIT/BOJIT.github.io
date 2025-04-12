/**
 * @file posts.ts
 * @author James Bennion-Pedley
 * @brief Helpers for getting compile-time post metadata
 * @date 12/04/2025
 *
 * @copyright Copyright (c) 2025
 *
 */

/*-------------------------------- Imports -----------------------------------*/

/*--------------------------------- Types ------------------------------------*/

export type PostEntry = {
    meta: {
        date: string,
        hidden?: boolean,
        published?: boolean,
        title: string,
        tile: {
            type: "image" | "link" | "text",
            image?: string,
        },
    },
    path: string,
};

/*--------------------------------- State ------------------------------------*/

/*------------------------------- Functions ----------------------------------*/

/**
 * Return list of post entries, sorted in reverse date order
 */
export async function getSortedPosts() {
    // This is done at compile time
    const allPostFiles = import.meta.glob('../../routes/*content*/**/**.svelte.md');
    const iterablePostFiles = Object.entries(allPostFiles)

    let allPosts: PostEntry[] = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice("../../routes/(content)/".length, -".svelte.md".length)

            console.log(path);
            console.log(postPath);

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    // If in production, filter out unpublished articles
    if (import.meta.env.PROD) {
        allPosts = allPosts.filter((p) => {
            return p.meta.hidden !== true;
        })
    }

    // Sort into date order
    const sortedPosts = allPosts.sort((a, b) => {
        let a_split = a.meta.date.split("-");
        let a_date = new Date(Number(a_split[2]), Number(a_split[1]) - 1, Number(a_split[0]));
        let b_split = b.meta.date.split("-");
        let b_date = new Date(Number(b_split[2]), Number(b_split[1]) - 1, Number(b_split[0]));
        return b_date.getTime() - a_date.getTime()
    })

    return sortedPosts;
}

/*-------------------------------- Exports -----------------------------------*/
