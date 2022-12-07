import { createContext, useContext } from 'react'

import { InputProps } from './Input.Definition'

export const InputContext = createContext<InputProps | null>(null)

export default function use() {
  return useContext(InputContext)
}
