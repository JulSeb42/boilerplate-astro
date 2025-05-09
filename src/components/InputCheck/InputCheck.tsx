import clsx from "clsx"
import { BiCheck, BiSolidCircle } from "react-icons/bi"
import type { IInputCheck } from "./types"

const containerClasses = {
	basic: "",
	toggle: "",
	tile: "border-solid border-2 rounded-md p-4",
}

const checkClasses = {
	checkbox: {
		basic: "relative top-[1px] size-4 border-2 border-blue-500 rounded-sm inline-block cursor-pointer",
		toggle: "relative top-[2px] w-[24px] h-[16px] inline-block border-2 border-solid border-blue-500 rounded-full ease-in-out duration-[200ms] transition-colors before:bg-blue-500 before:rounded-full before:size-2 before:inline-block before:absolute before:top-[2px] before:left-[2px] before:ease-in-out before:transition-transform before:duration-[200ms]",
		tile: "relative top-[1px] size-4 border-2 border-blue-500 rounded-sm inline-block cursor-pointer",
	},
	radio: {
		basic: "relative top-[2px] before:size-4 before:rounded-full before:border-2 before:border-solid before:border-blue-500 before:inline-block",
		toggle: "relative top-[2px] w-[24px] h-[16px] inline-block border-2 border-solid border-blue-500 rounded-full ease-in-out duration-[200ms] transition-colors before:bg-blue-500 before:rounded-full before:size-2 before:inline-block before:absolute before:top-[2px] before:left-[2px] before:ease-in-out before:transition-transform before:duration-[200ms]",
		tile: "relative top-[2px] before:size-4 before:rounded-full before:border-2 before:border-solid before:border-blue-500 before:inline-block",
	},
}

export const InputCheck = ({
	element = "label",
	id,
	label,
	variant = "basic",
	type = "checkbox",
	className,
	checked,
	...rest
}: IInputCheck) => {
	const Element = element

	return (
		<Element
			className={clsx(
				"flex items-center-safe gap-1 cursor-pointer select-none relative",
				containerClasses[variant],
				className,
				variant === "tile" && [
					"border-solid border-2 rounded-md p-4",
					checked ? "border-blue-500" : "border-gray-200",
				],
			)}
			htmlFor={id}
		>
			<span
				className={clsx(
					checkClasses[type][variant],
					{
						"bg-blue-500":
							type === "checkbox" &&
							(variant === "basic" || variant === "tile") &&
							checked,
					},
					"",
					{
						"bg-green-500 border-green-500 before:translate-x-2 before:bg-white":
							variant === "toggle" && checked,
					},
				)}
			/>

			<input
				id={id}
				type={type}
				className={clsx("appearance-none")}
				checked={checked}
				{...rest}
			/>

			{type === "checkbox" &&
				(variant === "basic" || variant === "tile") &&
				checked && (
					<BiCheck
						className={clsx("absolute text-white", {
							"top-[4px]": variant === "basic",
						})}
					/>
				)}

			{type === "radio" &&
				(variant === "basic" || variant === "tile") &&
				checked && (
					<BiSolidCircle
						className={clsx(
							"size-2 absolute top-2 left-1 text-blue-500",
							{ "top-6 left-5": variant === "tile" },
						)}
					/>
				)}

			{label}
		</Element>
	)
}
