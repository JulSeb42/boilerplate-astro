import type { FormHTMLAttributes } from "react"

interface IFormBase extends FormHTMLAttributes<HTMLFormElement> {
	element?: ElementType
	children?: Children
}

interface FormWithButton extends IFormBase {
	buttonPrimary?: string
	disabled?: boolean
	isLoading?: boolean
	buttonSecondary?: { text: string; type?: "reset" | "link"; href?: string }
}

interface FormWithoutButton extends IFormBase {
	buttonPrimary?: undefined
	disabled?: never
	isLoading?: never
	buttonSecondary?: never
}

export type IForm = FormWithButton | FormWithoutButton
