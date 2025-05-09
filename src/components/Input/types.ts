import type { InputHTMLAttributes } from "react"
import type { IInputContainer } from "components/InputContainer/types"

type InputType =
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "month"
	| "number"
	| "password"
	| "search"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week"
	| "select"
	| "textarea"

type IInputBase = IInputContainer &
	InputHTMLAttributes<
		HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
	> & {
		icons?: {
			left?: ReactElement
			right?: ReactElement
		}
		handleClear?: () => void
	}

type InputWithChildren = IInputBase & {
	type: Extract<InputType, "select">
	children?: Children
}

type InputWithoutChildren = IInputBase & {
	type?: Exclude<InputType, "select">
	children?: never
}

export type IInput = InputWithChildren | InputWithoutChildren
