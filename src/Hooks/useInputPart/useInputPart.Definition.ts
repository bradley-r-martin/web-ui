import React from 'react'

export interface UseInputPartProps {
  parts: React.HTMLProps<HTMLInputElement> &
    {
      onChange: any
      // any input prop
      name: string
      value: string
    }[]
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseInputPartFunctions {}
