import Label from './Label'
import React from 'react'

export interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LabelFunctions {}

export type LabelReference = React.RefObject<typeof Label>
