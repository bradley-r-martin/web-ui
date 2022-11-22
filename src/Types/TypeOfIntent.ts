export const INTENTS = [
  'default',
  'primary',
  'secondary',
  'consumptive',
  'constructive',
  'destructive',
] as const

export type TypeOfIntent = typeof INTENTS[number]
export default TypeOfIntent
