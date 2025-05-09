import clsx from "clsx"
import { BiXCircle, BiCheckCircle } from "react-icons/bi"
import { Text } from "components/Text"
import type { IInputContainer } from "./types"

export const InputContainer = ({
	element = "div",
	id,
	label,
	labelComment,
	helper,
	helperBottom,
	validation,
	counter,
	maxLength,
	value,
	children,
}: IInputContainer) => {
	const Element = element

	return (
		<Element className={clsx("flex flex-col gap-1")}>
			{label && (
				<label
					htmlFor={id}
					className={clsx(
						"flex items-center-safe gap-1",
						"text-blue-500 font-black",
					)}
				>
					{label}

					{labelComment && (
						<Text
							tag="small"
							color="gray-500"
							className="font-normal"
						>
							{labelComment}
						</Text>
					)}
				</label>
			)}

			{helper && <Text>{helper}</Text>}

			{children}

			{helperBottom && <Text>{helperBottom}</Text>}

			{counter && (
				<Text tag="small" color="gray-500">
					{value || value === ""
						? `${value.toString().length}/${maxLength}`
						: maxLength}
				</Text>
			)}

			{validation?.status !== undefined && validation?.message && (
				<Text className="flex items-start gap-2">
					<span className="w-[16px] inline-block">
						{validation.status === false ? (
							<BiXCircle className="text-red-500 inline-block size-4" />
						) : (
							<BiCheckCircle className="text-green-500 inline-block size-4" />
						)}
					</span>

					{validation.message}
				</Text>
			)}
		</Element>
	)
}
