import React from 'react'

export interface UseEnhancerProps {
  enhancers?: {
    top?: React.FC
    bottom?: React.FC
    left?: React.FC
    right?: React.FC
  }
  focus: () => void
}

export interface UseEnhancerFunctions {
  TopEnhancer: (props: any) => React.ReactNode
  BottomEnhancer: (props: any) => React.ReactNode
  LeftEnhancer: (props: any) => React.ReactNode
  RightEnhancer: (props: any) => React.ReactNode
}
