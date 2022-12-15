import React, { createContext, useContext, useEffect, useState } from 'react'

export const DisabledContext = createContext<any>(null)

export function useDisabled(disabled?: boolean) {
  const inheritedContext = useContext(DisabledContext)
  const isInherited = inheritedContext !== null

  // The default is always the direct property as it take priority unless it is
  // undefined and then the inherited property is used.
  const [isDisabled, setDisabled] = useState(
    disabled === undefined ? (isInherited ? inheritedContext : false) : disabled,
  )

  function enable() {
    setDisabled(false)
  }
  function disable() {
    setDisabled(true)
  }

  function context({ children }: any) {
    return <DisabledContext.Provider value={isDisabled}>{children}</DisabledContext.Provider>
  }

  useEffect(() => {
    // if the direct property changes then update the state to reflect the change.
    // if the inherited property changes and the direct property is undefined then update the state.
    if (isInherited) {
      if (disabled === undefined) {
        if (isDisabled !== inheritedContext) {
          setDisabled(inheritedContext)
        }
      } else {
        // condition
      }
    } else if (isDisabled !== disabled) {
      setDisabled(disabled)
    }
  }, [disabled, inheritedContext])

  return {
    isDisabled,
    enable,
    disable,
    DisabledContext: context,
  }
}
