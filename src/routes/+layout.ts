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

import { getSortedPosts, type PostEntry } from "$lib/utils/posts";

/*------------------------------- Functions ----------------------------------*/

const load: LayoutLoad = async ({ fetch, params }) => {
    const posts: PostEntry[] = await getSortedPosts();

    return {
        posts: posts
    };
}

/*-------------------------------- Exports -----------------------------------*/

export const prerender = true;
export const trailingSlash = 'always';

export { load };
