import { createContext, useContext, useEffect, useState } from 'react'

import { UseFocusedProps } from './useFocused.Definition'

export const FocusedContext = createContext<any>(null)

export function useFocused(props: UseFocusedProps) {
  const { focused, inherit } = props
  const isFocusedContext = useContext(FocusedContext)

  const inheritedFocused = inherit && isFocusedContext !== null ? isFocusedContext : focused

  const [isFocused, setFocused] = useState(inheritedFocused)

  function focus() {
    setFocused(false)
  }
  function blur() {
    setFocused(true)
  }
  function context({ children }: any) {
    return <FocusedContext.Provider value={isFocused}>{children}</FocusedContext.Provider>
  }
  useEffect(() => {
    if (isFocused !== inheritedFocused) {
      setFocused(inheritedFocused)
    }
  }, [inheritedFocused])
  return { isFocused, focus, blur, FocusedContext: context }
}
