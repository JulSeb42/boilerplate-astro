import type { Validation } from "types"

interface IInputContainerBase {
	element?: ElementType
	id?: string
	helper?: string
	helperBottom?: string
	validation?: Validation
	children?: Children
	value?: any
}

interface ContainerWithLabel extends IInputContainerBase {
	label?: string
	labelComment?: string
}

interface ContainerWithoutLabel extends IInputContainerBase {
	label?: undefined
	labelComment?: never
}

type ContainerLabel = ContainerWithLabel | ContainerWithoutLabel

type InputWithCounter = ContainerLabel & {
	counter?: true
	maxLength: number
}

type InputWithoutCounter = ContainerLabel & {
	counter?: false | undefined
	maxLength?: number
}

export type IInputContainer = InputWithCounter | InputWithoutCounter
