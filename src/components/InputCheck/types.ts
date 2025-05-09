import type { InputHTMLAttributes } from "react"
import type { InputCheckVariant, ValidationStatus } from "types"

export interface IInputCheck extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
	element?: ElementType
	type?: "checkbox" | "radio"
	variant?: InputCheckVariant
	validation?: ValidationStatus
}
