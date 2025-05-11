import type { NodePlopAPI, ActionType } from "plop"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("form", {
		description: "Creates a new form",
		prompts: [
			{ type: "input", message: "Enter form's name", name: "name" },
		],
		actions: [
			{
				type: "add",
				path: `${BASE_PATH}/forms/{{>pascalName}}Form.tsx`,
				templateFile: "./templates/form.hbs",
			},
			{
				type: "modify",
				path: `${BASE_PATH}/forms/index.ts`,
				template: 'export * from "./{{>pascalName}}Form"\n$1',
				pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
			},
		],
		// actions: data => {
		//     const actions: Array<ActionType> = []
		//     return actions
		// },
	})
}
