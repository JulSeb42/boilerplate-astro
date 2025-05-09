import type { JSX } from "astro/jsx-runtime"
import type {
	ElementType as ElType,
	ReactNode,
	ReactElement as ReactEl,
	ChangeEvent as ChangeE,
	FormEvent as FormE,
} from "react"

declare global {
	type JSXElement = JSX.Element
	type ElementType = ElType
	type Children = ReactNode | Array<ReactNode>
	type ReactElement = ReactEl
	type ChangeEvent<T> = ChangeE<T>
	type FormEvent = FormE<HTMLFormElement>
}
