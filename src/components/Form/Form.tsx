import clsx from "clsx"
import { Button } from "components/Button"
import type { IForm } from "./types"

export const Form = ({
	element = "form",
	children,
	buttonPrimary,
	buttonSecondary,
	isLoading,
	disabled,
	...rest
}: IForm) => {
	const Element = element

	return (
		<Element className={clsx("flex flex-col gap-4")} {...rest}>
			{children}

			{buttonPrimary && (
				<div className="flex gap-2 items-center-safe">
					<Button
						type="submit"
						disabled={disabled || isLoading}
						isLoading={isLoading}
					>
						{buttonPrimary}
					</Button>

					{buttonSecondary && (
						<Button
							variant="text"
							disabled={disabled}
							type={
								buttonSecondary.type === "reset"
									? "reset"
									: "button"
							}
							href={buttonSecondary.href}
						>
							{buttonSecondary.text}
						</Button>
					)}
				</div>
			)}
		</Element>
	)
}
