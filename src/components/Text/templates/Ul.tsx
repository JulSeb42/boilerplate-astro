import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import { genLinkColor, genTextAlign, genTextColor } from "../utils"
import type { IText } from "../types"

export const Ul = ({
	element = "ul",
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
				"text-[16px]",
				"list-disc ps-8",
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
