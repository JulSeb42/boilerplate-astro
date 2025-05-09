import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("data", {
		description: "Generates a file in the data directory",
		prompts: [
			{ type: "input", message: "Enter file's name", name: "name" },
		],
		actions: [
			{
				type: "add",
				templateFile: "./templates/data.hbs",
				path: `${BASE_PATH}/data/{{>kebabName}}.ts`,
			},
			{
				type: "modify",
				path: `${BASE_PATH}/data/index.ts`,
				template: 'export * from "./{{>kebabName}}"\n$1',
				pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
			},
		],
		// actions: data => {
		//     const actions = []
		//     return actions
		// },
	})
}
