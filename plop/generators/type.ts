import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("type", {
		description: "Generate a new TS type",
		prompts: [
			{ type: "input", message: "Enter type's name", name: "name" },
			{
				type: "confirm",
				message: "Create it as interface?",
				name: "interface",
				default: false,
			},
		],
		actions: data => {
			const actions = []

			if (data?.interface)
				actions.push(
					...[
						{
							type: "add",
							path: `${BASE_PATH}/types/{{>pascalName}}.interface.ts`,
							templateFile: "./templates/interface.hbs",
						},
						{
							type: "modify",
							path: `${BASE_PATH}/types/index.ts`,
							template:
								'export * from "./{{>pascalName}}.interface"\n$1',
							pattern:
								/(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
						},
					],
				)
			else
				actions.push(
					...[
						{
							type: "add",
							path: `${BASE_PATH}/types/{{>pascalName}}.type.ts`,
							templateFile: "./templates/type.hbs",
						},
						{
							type: "modify",
							path: `${BASE_PATH}/types/index.ts`,
							template:
								'export * from "./{{>pascalName}}.type"\n$1',
							pattern:
								/(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
						},
					],
				)

			return actions
		},
	})
}
