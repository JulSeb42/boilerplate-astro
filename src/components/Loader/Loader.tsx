import clsx from "clsx"
import { designTokens } from "data"
import type { ILoader } from "./types"

export const Loader = ({ color = "slate", size = 24 }: ILoader) => {
	const bgColor =
		// @ts-ignore
		designTokens.bgColors[color === "white" ? color : `${color}-500`]

	return (
		<div
			className={clsx("inline-flex items-center justify-center gap-1")}
			style={{ width: size, height: size }}
		>
			<span
				className={clsx(
					"aspect-square grow rounded-full",
					bgColor,
					"animate-[flash_1000ms_infinite_alternate_0ms]",
				)}
			/>
			<span
				className={clsx(
					"aspect-square grow rounded-full",
					bgColor,
					"animate-[flash_1000ms_infinite_alternate_250ms]",
				)}
			/>
			<span
				className={clsx(
					"aspect-square grow rounded-full",
					bgColor,
					"animate-[flash_1000ms_infinite_alternate_500ms]",
				)}
			/>
		</div>
	)
}
