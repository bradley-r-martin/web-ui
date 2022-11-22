import { useCallback, useEffect, useMemo } from 'react'

import { UseEnhancerProps } from './useEnhancer.Definition'

export function useEnhancer(props: UseEnhancerProps) {
  const { enhancers, focus } = props

  function TopEnhancer(abilities: any) {
    if (enhancers?.top) {
      return (
        <div
          onMouseDown={(e) => {
            e.preventDefault()
            focus()
          }}
          className='flex-stretch flex justify-center items-center'
        >
          <enhancers.top {...abilities} />
        </div>
      )
    }
    return <></>
  }
  function BottomEnhancer(abilities: any) {
    if (enhancers?.bottom) {
      return (
        <div
          onMouseDown={(e) => {
            e.preventDefault()
            focus()
          }}
          className='flex-stretch flex justify-center items-center'
        >
          <enhancers.bottom {...abilities} />
        </div>
      )
    }
    return <></>
  }
  function LeftEnhancer(abilities: any) {
    if (enhancers?.left) {
      return (
        <div
          onMouseDown={(e) => {
            e.preventDefault()
            focus()
          }}
          className='flex-stretch flex justify-center items-center'
        >
          <enhancers.left {...abilities} />
        </div>
      )
    }
    return <></>
  }
  function RightEnhancer(abilities: any) {
    if (enhancers?.right) {
      return (
        <div
          onMouseDown={(e) => {
            e.preventDefault()
            focus()
          }}
          className='flex-stretch flex justify-center items-center'
        >
          <enhancers.right {...abilities} />
        </div>
      )
    }
    return <></>
  }

  useEffect(() => {
    console.log('should render only once')
  }, [])

  return useMemo(
    () => ({
      TopEnhancer,
      BottomEnhancer,
      LeftEnhancer,
      RightEnhancer,
    }),
    [],
  )
}
