import { WebUIContext } from './WebUIConfig.Context'
import { useContext } from 'react'

export default function useWebUIConfig() {
  const context = useContext(WebUIContext)
  if (context === null) {
    throw new Error('Cannot use useWebUIConfig outside of a WebUIContext.')
  }
  return context
}
