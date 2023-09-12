/**
 * @file svelte.config.ts
 * @author James Bennion-Pedley
 * @brief Site configuration
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
 */

/*-------------------------------- Imports -----------------------------------*/

import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/kit/vite';

// Markdown Preprocessing
import { mdsvex } from "mdsvex";
import remarkCodeBox from "./src/lib/plugins/remarkCodeBox.js";

/*--------------------------------- State ------------------------------------*/

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svelte.md"],
    preprocess: [
        mdsvex({
            extensions: [".svelte.md"],
            // remarkPlugins: [remarkCodeBox],
        }),
        vitePreprocess(),
    ],
    kit: {
        adapter: adapter(),
    }
};

/*-------------------------------- Exports -----------------------------------*/

export default config;
