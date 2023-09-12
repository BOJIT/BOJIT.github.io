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

import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

/*--------------------------------- Types ------------------------------------*/

type PostMetadata = {
    date: string,
    title: string,
    tile: {
        type: "image" | "link" | "text",
        image?: string,
    }
    hidden?: boolean,
    published?: boolean,
}

/*------------------------------- Functions ----------------------------------*/

const load: PageLoad = async ({ fetch, params }) => {
    // Workaround: https://github.com/vitejs/vite/issues/11824
    const articles = import.meta.glob('../../../*content*/**/**.svelte.md');

    try {
        const article: any = await articles[`../../${params.category}/${params.article}.svelte.md`]();
        const metadata: PostMetadata = article.metadata;

        return {
            metadata: metadata,
            content: article.default,
        };
    } catch (e) {
        throw error(404, "Article not found!");
    }
}

/*-------------------------------- Exports -----------------------------------*/

export { load };
