/**
 * @file +page.ts
 * @author James Bennion-Pedley
 * @brief Loads page data (posts manifest)
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
 */

/*-------------------------------- Imports -----------------------------------*/

import type { LayoutLoad } from "./$types";

/*--------------------------------- Types ------------------------------------*/

type PostEntry = {
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

/*------------------------------- Functions ----------------------------------*/

async function GetPosts() {
    // This is done at compile time
    const allPostFiles = import.meta.glob('./*content*/**/**.svelte.md');
    const iterablePostFiles = Object.entries(allPostFiles)

    let allPosts: PostEntry[] = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice("./(content)/".length, -".md".length)

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

    const sortedPosts = allPosts.sort((a, b) => {
        let a_split = a.meta.date.split("-");
        let a_date = new Date(Number(a_split[2]), Number(a_split[1]) - 1, Number(a_split[0]));
        let b_split = b.meta.date.split("-");
        let b_date = new Date(Number(b_split[2]), Number(b_split[1]) - 1, Number(b_split[0]));
        return b_date.getTime() - a_date.getTime()
    })

    return sortedPosts;
}

const load: LayoutLoad = async ({ fetch, params }) => {
    const posts: PostEntry[] = await GetPosts();

    return {
        posts: posts
    };
}

/*-------------------------------- Exports -----------------------------------*/

export const prerender = true;
export const trailingSlash = 'always';

export { load };
