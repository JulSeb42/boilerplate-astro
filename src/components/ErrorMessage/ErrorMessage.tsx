import clsx from "clsx"
import type { IErrorMessage } from "./types"

export const ErrorMessage = ({ element = "div", message }: IErrorMessage) => {
	const Element = element

	if (!message) return null

	return (
		<Element
			className={clsx(
				"border-1 border-red-500 border-solid p-3 rounded-lg bg-red-50",
			)}
		>
			{message}
		</Element>
	)
}
