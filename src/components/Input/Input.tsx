import { useState } from "react"
import clsx from "clsx"
import { BiShowAlt, BiHide, BiX } from "react-icons/bi"
import { InputContainer } from "components/InputContainer"
import type { IInput } from "./types"

const InputFn = ({
	type,
	itemRef,
	validation,
	id,
	icons,
	value,
	handleClear,
	className,
	...rest
}: IInput) => {
	const containerClasses = [
		"w-full h-8 border-solid border-gray-200 border-[1px] rounded-sm",
		"px-2",
		"flex items-center-safe gap-2",
		className,
	]
	const inputClasses = ["w-full h-full outline-0 relative z-0"]

	const [inputType, setInputType] = useState<"password" | "text">("password")

	if (type === "select")
		return (
			<div
				className={clsx(
					...containerClasses,
					"cursor-pointer",
					validation?.status === false
						? "has-[select:focus]:border-red-500 bg-red-50"
						: validation?.status === true
							? "has-[select:focus]:border-green-500 bg-green-50"
							: "has-[select:focus]:border-blue-500 bg-white",
				)}
			>
				<select
					ref={itemRef as any}
					id={id}
					className={clsx(...inputClasses, "cursor-pointer")}
					value={value}
					{...rest}
				/>
			</div>
		)

	if (type === "textarea")
		return (
			<div
				className={clsx(
					...containerClasses,
					"h-fit",
					"pr-0",
					"resize-y",
					validation?.status === false
						? "has-[textarea:focus]:border-red-500 bg-red-50"
						: validation?.status === true
							? "has-[textarea:focus]:border-green-500 bg-green-50"
							: "has-[textarea:focus]:border-blue-500 bg-white",
				)}
			>
				<textarea
					ref={itemRef as any}
					id={id}
					className={clsx(...inputClasses, "min-h-24", "resize-y")}
					value={value}
					{...rest}
				/>
			</div>
		)

	return (
		<div
			className={clsx(
				...containerClasses,
				validation?.status === false
					? "has-[input:focus]:border-red-500 bg-red-50"
					: validation?.status === true
						? "has-[input:focus]:border-green-500 bg-green-50"
						: "has-[input:focus]:border-blue-500 bg-white",
			)}
		>
			{icons?.left}

			{icons?.left && (
				<span className="h-full w-[1px] bg-gray-200 inline-block" />
			)}

			<input
				ref={itemRef as any}
				id={id}
				className={clsx(
					...inputClasses,
					"[&::-webkit-search-cancel-button]:hidden",
				)}
				type={type === "password" ? inputType : type}
				value={value}
				{...rest}
			/>

			{icons?.right}

			{type === "password" && (
				<button
					type="button"
					onClick={() =>
						setInputType(
							inputType === "password" ? "text" : "password",
						)
					}
					className="relative z-10"
				>
					{inputType === "password" ? (
						<BiHide className="text-blue-500" />
					) : (
						<BiShowAlt className="text-blue-500" />
					)}
				</button>
			)}

			{handleClear && value.toString().length > 0 ? (
				<button type="button" onClick={handleClear}>
					<BiX size={24} className="text-blue-500" />
				</button>
			) : undefined}
		</div>
	)
}

export const Input = ({
	type,
	itemRef,
	id,
	label,
	labelComment,
	helper,
	helperBottom,
	validation,
	counter,
	value,
	maxLength,
	...rest
}: IInput) => {
	const hasContainer = !!(
		label ||
		helper ||
		helperBottom ||
		validation?.message ||
		counter
	)

	const inputFnProps = {
		type,
		itemRef,
		value,
		id,
		validation,
		...rest,
	}

	if (hasContainer)
		return (
			// @ts-ignore
			<InputContainer
				id={id}
				label={label}
				labelComment={labelComment}
				helper={helper}
				helperBottom={helperBottom}
				validation={validation}
				counter={counter}
				value={value}
				maxLength={maxLength}
			>
				{/* @ts-ignore */}
				<InputFn {...inputFnProps} />
			</InputContainer>
		)

	// @ts-ignore
	return <InputFn {...inputFnProps} />
}
