// ---
// import type { HTMLAttributes } from "astro/types"
// import clsx from "clsx"
// import Loader from "../Loader.astro"
// import {
// 	colorsPlain,
// 	colorsOutline,
// 	colorsText,
// 	colorsGhost,
// 	buttonSizes,
// } from "./tokens"
// import type { ButtonVariant, ColorHover, ButtonSize } from "types"

// // @ts-ignore
// type IButtonBase = HTMLAttributes<HTMLAnchorElement & HTMLButtonElement> & {
// 	iconLeft?: JSXElement
// 	iconRight?: JSXElement
// 	isLoading?: boolean
// 	color?: ColorHover
// 	href?: string
// 	size?: ButtonSize
// 	class?: string
// 	disabled?: boolean
// }

// interface ButtonWithBackground extends IButtonBase {
// 	variant?: Exclude<ButtonVariant, "text">
// 	noPadding?: never
// }

// interface ButtonWithoutBackground extends IButtonBase {
// 	variant?: Extract<ButtonVariant, "text">
// 	noPadding?: boolean
// }

// type IButton = ButtonWithBackground | ButtonWithoutBackground

// const {
// 	href,
// 	variant = "plain",
// 	iconLeft,
// 	iconRight,
// 	isLoading,
// 	color = "blue",
// 	size = "large",
// 	noPadding,
// 	disabled,
// 	...rest
// } = Astro.props as IButton

// const commonClasses = [
// 	"inline-flex justify-center-safe items-center-safe gap-2",
// 	"rounded-md",
// 	"font-black",
// 	"border-1 border-solid",
// 	{ [colorsPlain[color]]: variant === "plain" },
// 	{ [colorsGhost[color]]: variant === "ghost" },
// 	{ [colorsOutline[color]]: variant === "outline" },
// 	{ [colorsText[color]]: variant === "text" },
// 	{ "border-transparent": variant !== "outline" },
// 	size === "small" ? "text-sm" : "text-base",
// 	{ "self-start": size !== "full" },
// 	{ "w-full self-stretch": size === "full" },
// 	size === "small" ? "px-2 py-1" : noPadding ? "px-0 py-0" : "px-4 py-2",

// ]

// const classes = clsx(...commonClasses)
// ---

// {
// 	href ? (
// 		<a href={href} class={classes} {...rest}>
// 			{iconLeft}
// 			<slot />
// 			{isLoading ? <Loader color="gray" size={42} /> : iconRight}
// 		</a>
// 	) : (
// 		<button class={classes} disabled={disabled || isLoading} {...rest}>
// 			{iconLeft}
// 			<slot />
// 			{isLoading ? <Loader color="gray" size={24} /> : iconRight}
// 		</button>
// 	)
// }

// import { Link } from "react-router-dom"
import clsx from "clsx"
import { Loader } from "../Loader"
import { colorsPlain, colorsOutline, colorsGhost, colorsText } from "./tokens"
import type { IButton } from "./types"

export const Button = ({
	color = "blue",
	className,
	href,
	variant = "plain",
	noPadding,
	size = "large",
	disabled,
	isLoading,
	children,
	type = "button",
	...rest
}: IButton) => {
	const classes = clsx(
		"inline-flex justify-center-safe items-center-safe gap-2",
		"rounded-md",
		"font-black",
		"border-1 border-solid",
		{ [colorsPlain[color]]: variant === "plain" },
		{ [colorsGhost[color]]: variant === "ghost" },
		{ [colorsOutline[color]]: variant === "outline" },
		{ [colorsText[color]]: variant === "text" },
		{ "border-transparent": variant !== "outline" },
		size === "small" ? "text-sm" : "text-base",
		{ "self-start": size !== "full" },
		{ "w-full self-stretch": size === "full" },
		size === "small" ? "px-2 py-1" : noPadding ? "px-0 py-0" : "px-4 py-2",
		{
			"bg-gray-100 !text-gray-500 [&:hover]:bg-gray-100 [&:active]:bg-gray-100":
				((disabled || isLoading) && variant === "plain") ||
				((disabled || isLoading) && variant === "ghost"),
		},
		{
			"!text-gray-500 border-gray-500 [&:hover]:border-gray-500 [&:active]:border-gray-500":
				(disabled || isLoading) && variant === "outline",
		},
		{
			"!text-gray-500 [&:hover]:text-gray-500 [&:active]:text-gray-500":
				(disabled || isLoading) && variant === "text",
		},
		className,
	)

	if (href)
		return (
			<a href={href} className={classes} {...rest}>
				{children}
				{isLoading && <Loader size={24} />}
			</a>
		)

	return (
		<button
			className={classes}
			type={type}
			disabled={disabled || isLoading}
			{...rest}
		>
			{children}

			{isLoading && <Loader size={24} />}
		</button>
	)
}
