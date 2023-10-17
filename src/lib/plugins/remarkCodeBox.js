/**
 * @file svelte.config.ts
 * @author James Bennion-Pedley
 * @brief Custom Markdown parser
 * @date 12/09/2023
 *
 * @copyright Copyright (c) 2023
 *
 */

/*-------------------------------- Imports -----------------------------------*/

import { visit } from "unist-util-visit";

/*------------------------------- Functions ----------------------------------*/

const remarkCodeBox = () => {
    return (tree, file) => {
        visit(tree, "code", (node, index, parent) => {
            const metaString = `${node.lang ?? ""} ${node.meta ?? ""}`.trim();
            if (!metaString) return;
            const [title] = metaString.match(/(?<=title=("|'))(.*?)(?=("|'))/) ?? [""];
            if (!title && metaString.includes("title=")) {
                file.message("Invalid title", node, "remark-code-title");
                return;
            }
            if (!title) return;

            const titleNode = {
                type: "paragraph",
                data: {
                    hName: "div",
                    hProperties: {
                        "data-remark-code-title": true,
                        "data-language": node.lang,
                    },
                },
                children: [{ type: "text", value: title }],
            };

            parent.children.splice(index, 0, titleNode);
            /* Skips this node (title) and the next node (code) */
            return index + 2;
        });
    };
};

/*-------------------------------- Exports -----------------------------------*/

export default remarkCodeBox;
