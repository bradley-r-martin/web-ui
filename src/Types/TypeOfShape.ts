export const SHAPES = ['squircle', 'square', 'pill', 'circle'] as const

export type TypeOfShape = typeof SHAPES[number]
export default TypeOfShape
