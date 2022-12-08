import React from 'react'

export interface FormProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  input?: object
  output?: (state: object) => void
  locked?: boolean
  debug?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormFunctions {}
