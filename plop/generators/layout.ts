import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("layout", {
        description: "Creates a new Astro layout",
		prompts: [
			{ name: "name", message: "Enter a name", type: "input" },
			{
				name: "tag",
				message: "What HTML tag is it?",
				type: "input",
				default: "div",
			},
		],
		actions: [
			{
				type: "add",
				path: `${BASE_PATH}/layouts/{{>pascalName}}.astro`,
				templateFile: "./templates/component.hbs",
			},
			{
				type: "modify",
				path: `${BASE_PATH}/layouts/index.ts`,
				template:
					'export { default as {{>pascalName}} } from "./{{>pascalName}}.astro"\n$1',
				pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
			},
		],
        // actions: data => {
        //     const actions = []
        //     return actions
        // },
    })
}
