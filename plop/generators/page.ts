import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("page", {
		description: "Creates a new page",
		prompts: [
			{ type: "input", name: "title", message: "Enter page's title" },
			{ type: "input", name: "path", message: "Enter page's path" },
			{
				type: "list",
				name: "type",
				message: "Select page's type",
				choices: ["Astro", "MD", "MDX"],
			},
		],
		actions: [
			{
				type: "add",
				path: `${BASE_PATH}/pages/{{ kebabCase title }}.astro`,
				templateFile: "./templates/page.hbs",
			},
			{
				type: "modify",
				path: `${BASE_PATH}/data/routes.ts`,
				template:
					'{{ constantCase title }}: "/{{ kebabCase path }}",\n\t$1',
				pattern: /(\/\* Prepend new page - DO NOT REMOVE \*\/)/g,
			},
		],
		// actions: data => {
		//     const actions = []
		//     return actions
		// },
	})
}
