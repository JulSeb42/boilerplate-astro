import type { NodePlopAPI } from "plop"
import chalk from "chalk"
import figlet from "figlet"
import { runCommand } from "./actions"
import { kebabName, pascalName } from "./partials"
import {
	addOpenBrackets,
	addClosingBrackets,
	surroundBrackets,
} from "./helpers"
import {
	generateGenerator,
	generateComponent,
	generateData,
	generateLayout,
	generatePage,
	generateType,
	generateService,
	generateForm,
	/* Prepend import - DO NOT REMOVE */
} from "./generators"

export default (plop: NodePlopAPI) => {
	console.log(
		chalk.blueBright(
			figlet.textSync("JulSeb CLI", { horizontalLayout: "full" }),
		),
	)

	/*====================== Actions ======================*/

	runCommand(plop) // Allows us to run terminal commands

	/*====================== Partials ======================*/

	kebabName(plop) // Shorthand for {{ kebabCase name }}, use {{>kebabName}}
	pascalName(plop) // Shorthand for {{ pascalCase name }}, use {{>pascalName}}

	/*====================== Helpers ======================*/

	addOpenBrackets(plop) // Add open double brackets in your templates where needed, use {{addOpenBrackets}}
	addClosingBrackets(plop) // Add close double brackets in your templates where needed, use {{addClosingBrackets}}
	surroundBrackets(plop) // Surround word between opening and closing brackets in your templates where needed, use {{surroundBrackets "your text"}}

	/*====================== Generators ======================*/

	generateGenerator(plop) // plop:g
	generateComponent(plop) // yarn plop:c
	generateData(plop) // yarn plop:d
	generateLayout(plop) // yarn plop:l
	generatePage(plop) // yarn plop:p
	generateType(plop) // yarn plop:ty
	generateService(plop) // yarn plop:s
	generateForm(plop) // yarn plop:f
	/* Prepend function - DO NOT REMOVE */
}
