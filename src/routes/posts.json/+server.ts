/**
 * @file +server.ts
 * @author James Bennion-Pedley
 * @brief Returns a JSON manifest of all posts on the site
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
 */

/*-------------------------------- Imports -----------------------------------*/

import type { RequestHandler } from '@sveltejs/kit';

import { json } from '@sveltejs/kit';

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

const GET: RequestHandler = async ({ url }) => {
    // This is done at compile time
    const allPostFiles = import.meta.glob('../*content*/**/**.svelte.md');
    const iterablePostFiles = Object.entries(allPostFiles)

    let allPosts: PostEntry[] = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice("../(content)/".length, -".md".length)

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

    return json(sortedPosts);
}

/*-------------------------------- Exports -----------------------------------*/

export { GET };
export type { PostEntry };
