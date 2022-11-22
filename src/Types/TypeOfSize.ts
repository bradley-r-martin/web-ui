export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export type TypeOfSize = typeof SIZES[number]
export default TypeOfSize
