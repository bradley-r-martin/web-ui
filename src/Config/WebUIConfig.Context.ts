import { WebUIConfigContext } from './WebUIConfig.Definition'
import { createContext } from 'react'

export const WebUIContext = createContext<WebUIConfigContext | null>(null)
