import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import type { ColorHover } from "types"
import type { PATHS } from "data"

export const buttonVariants = {
	plain: "plain",
	ghost: "ghost",
	outline: "outline",
	text: "text",
} as const

export const buttonSizes = {
	small: "small",
	large: "large",
	full: "full",
} as const

type IButtonBase = ButtonHTMLAttributes<HTMLButtonElement> &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		color?: ColorHover
		href?: string
		size?: keyof typeof buttonSizes
		isLoading?: boolean
	}

type ButtonWithBackground = IButtonBase & {
	variant?: Exclude<keyof typeof buttonVariants, "text">
	noPadding?: never
}

type ButtonWithoutBackground = IButtonBase & {
	variant?: Extract<keyof typeof buttonVariants, "text">
	noPadding?: boolean
}

export type IButton = ButtonWithBackground | ButtonWithoutBackground
