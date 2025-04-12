/**
 * @file +server.ts
 * @author James Bennion-Pedley
 * @brief Generates RSS feed for the most recent articles (Atom 1.0 Spec)
 * @date 12/04/2025
 *
 * @copyright Copyright (c) 2025
 *
 */

/*-------------------------------- Imports -----------------------------------*/

import { getSortedPosts, type PostEntry } from "$lib/utils/posts";

/*--------------------------------- State ------------------------------------*/

export const prerender = true;

const website = import.meta.env.VITE_BASE_URL;
const feedTitle = 'BOJIT.org';
const feedDescription = 'Projects, Tutorials and Ramblings of James Bennion-Pedley';
const feedLink = `${website}/rss`;
const feedUpdated = new Date(); // Set at compile time
const entryCount = 10; // Only show 10 most recent articles

/*------------------------------- Functions ----------------------------------*/

function xml(posts: PostEntry[]): string {
    const entries = posts.map((post) => {
        // Date in metadata will always be dd-mm-yyyy
        const parts = post.meta.date.split("-");
        const isoDate = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));

        return `<entry>
            <title>${post.meta.title}</title>
            <link href="${website}/${post.path}"/>
            <id>${website}/${post.path}</id>
            <published>${isoDate.toISOString()}</published>
            <updated>${isoDate.toISOString()}</updated>
            <description>${post.meta.tile.type === 'image' ? `<![CDATA[<img src="${import.meta.env.VITE_IMAGE_BASE}${post.meta.tile.image}">]]>` : post.meta.title}</description>
            <author>
                <name>James Bennion-Pedley</name>
            </author>
        </entry>`;
    })


    return `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>${feedTitle}</title>
        <subtitle>${feedDescription}</subtitle>
        <link href="${website}"/>
        <link href="${feedLink}" rel="self" type="application/rss+xml"/>
        <id>${feedLink}/</id>
        <updated>${feedUpdated.toISOString()}</updated>
        <author>
            <name>James Bennion-Pedley</name>
        </author>
        <generator>JavaScript</generator>
        ${entries.join('\n')}
    </feed>`;
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET() {
    const posts: PostEntry[] = await getSortedPosts();

    const body = xml(posts.slice(0, entryCount));
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml'
    };

    return new Response(body, { headers });
}
