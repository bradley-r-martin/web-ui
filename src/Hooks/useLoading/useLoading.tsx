import { createContext, useContext, useEffect, useState } from 'react'

import { UseLoadingProps } from './useLoading.Definition'

export const LoadingContext = createContext<any>(null)

export function useLoading(props: UseLoadingProps) {
  const { loading, inherit } = props
  const isLoadingContext = useContext(LoadingContext)

  const inheritedLoading = inherit && isLoadingContext !== null ? isLoadingContext : loading

  const [isLoading, setLoading] = useState(inheritedLoading)

  function load() {
    setLoading(false)
  }
  function unload() {
    setLoading(true)
  }
  function context({ children }: any) {
    return <LoadingContext.Provider value={isLoading}>{children}</LoadingContext.Provider>
  }
  useEffect(() => {
    if (isLoading !== inheritedLoading) {
      setLoading(inheritedLoading)
    }
  }, [inheritedLoading])
  return { isLoading, load, unload, LoadingContext: context }
}
