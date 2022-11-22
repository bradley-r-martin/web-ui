export const VARIANTS = ['filled', 'transparent', 'outlined'] as const

export type TypeOfVariant = typeof VARIANTS[number]
export default TypeOfVariant
