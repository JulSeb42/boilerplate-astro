import type { NodePlopAPI, ActionType } from "plop"
import { toKebabCase, toPascalCase, toConstantCase } from "../utils"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("service", {
		description: "Creates a new API service",
		prompts: [
			{
				type: "input",
				message: "What's the name of your new service?",
				name: "name",
			},
			{
				type: "confirm",
				message: "Do you want to create a new type?",
				name: "type",
			},
		],
		// actions: [],
		actions: data => {
			const name: string =
				data?.name[-1] === "s" ? data?.name.slice(0, -1) : data?.name
			const type: boolean = data?.type

			const actions: Array<ActionType> = [
				{
					type: "add",
					path: `${BASE_PATH}/api/${toKebabCase(name)}.service.ts`,
					templateFile: "./templates/service.hbs",
				},
				{
					type: "modify",
					path: `${BASE_PATH}/api/index.ts`,
					template: `export * from "./${toKebabCase(name)}.service"\n$1`,
					pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
				},
				{
					type: "modify",
					path: `${BASE_PATH}/data/server-paths.ts`,
					template: `${toConstantCase(name)}: "/${toKebabCase(name)}",\n\t$1`,
					pattern: /(\/\* Prepend path root - DO NOT REMOVE \*\/)/g,
				},
				{
					type: "modify",
					path: `${BASE_PATH}/data/server-paths.ts`,
					template: `${toConstantCase(name)}: {\n\t\tROOT: SERVER_PATH_ROOTS.${toConstantCase(name)},\n\t\tALL_${toConstantCase(name)}S: "/all-${toKebabCase(name)}s",\n\t\tGET_${toConstantCase(name)}: (id = ":id") => \`/${toKebabCase(name)}/\${id}\`,\n\t},\n\t$1`,
					pattern: /(\/\* Prepend server path - DO NOT REMOVE \*\/)/g,
				},
			]

			if (type) {
				actions.push(
					{
						type: "add",
						// @ts-ignore
						path: `${BASE_PATH}/types/${toPascalCase(name)}.type.ts`,
						templateFile: "./templates/type.hbs",
					},
					{
						type: "modify",
						path: `${BASE_PATH}/types/index.ts`,
						template: `export * from "./${toPascalCase(name)}".type"\n$1`,
						pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
					},
				)
			}

			return actions
		},
	})
}
