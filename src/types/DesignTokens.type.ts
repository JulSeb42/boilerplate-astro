import type { designTokens } from "data"

export type Color = keyof typeof designTokens.colors
export type ColorHover = keyof typeof designTokens.colorsHover
export type TextTag = keyof typeof designTokens.textTags
export type MainSizes = keyof typeof designTokens.mainSizes
export type ButtonVariant = keyof typeof designTokens.buttonVariants
export type ButtonSize = keyof typeof designTokens.buttonSizes
export type InputCheckVariant = keyof typeof designTokens.inputCheckVariants
