import Exception from './Exception'
import React from 'react'

export interface ExceptionProps {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExceptionFunctions {}

export type ExceptionReference = React.RefObject<typeof Exception>
