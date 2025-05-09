import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import { genLinkColor, genTextAlign, genTextColor } from "../utils"
import type { IText } from "../types"

export const H4 = ({
	element = "h4",
	className,
	children,
	color = "currentColor",
	linkColor = "blue",
	textAlign = "left",
	...rest
}: IText) => {
	const Element = element

	return (
		<Element
			className={clsx(
				BASE_CLASSES,
				"text-[24px]",
				"font-black",
				(genTextAlign as any)[textAlign],
				(genTextColor as any)[color],
				(genLinkColor as any)[linkColor],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
