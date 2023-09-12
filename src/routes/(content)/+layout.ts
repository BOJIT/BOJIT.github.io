/**
 * @file +layout.ts
 * @author James Bennion-Pedley
 * @brief Handles page data for standard page
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
 */

/*-------------------------------- Imports -----------------------------------*/

import type { LayoutLoad } from "./$types";

/*------------------------------- Functions ----------------------------------*/

const load: LayoutLoad = async ({ fetch, params }) => {
    console.log(params);

    const posts = await fetch(`/posts.json`).then((res) => res.json());
    // const post = await fetch(`${params.pathname}.json`).then((res) =>
    //     res.json()
    // );

    return {
        // post: post,
        posts: posts
    };
}

/*-------------------------------- Exports -----------------------------------*/

export { load };
