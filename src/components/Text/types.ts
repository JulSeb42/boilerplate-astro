import type { ElementType, HTMLAttributes } from "react"
import type { Property } from "csstype"
import type { Color, ColorHover, TextTag } from "../../types"

export interface IText
	extends HTMLAttributes<
		HTMLHeadingElement &
			HTMLParagraphElement &
			HTMLOListElement &
			HTMLUListElement
	> {
	element?: ElementType
	color?: Color
	linkColor?: ColorHover
	textAlign?: Property.TextAlign
	tag?: TextTag
}
