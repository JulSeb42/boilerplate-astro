import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("component", {
		description: "Creates a new Astro component",
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
				type: "addMany",
				destination: `${BASE_PATH}/components/{{>pascalName}}`,
				templateFiles: "./templates/component/*.hbs",
				base: "./templates/component",
				verbose: true,
			},
			{
				type: "modify",
				path: `${BASE_PATH}/components/index.ts`,
				template:
					'export * from "./{{>pascalName}}"\n$1',
				pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
			},
		],
		// actions: data => {
		//     const actions = []
		//     return actions
		// },
	})
}
