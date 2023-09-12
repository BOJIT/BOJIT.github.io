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

import type { PostEntry } from "./posts.json/+server";

/*------------------------------- Functions ----------------------------------*/

const load: LayoutLoad = async ({ fetch, params }) => {
    const posts: PostEntry[] = await fetch(`/posts.json`).then((res) => res.json());
    return {
        posts: posts
    };
}

/*-------------------------------- Exports -----------------------------------*/

export const prerender = true;
export const trailingSlash = 'always';

export { load };
