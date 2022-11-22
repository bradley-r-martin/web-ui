import Label from './Label'
import React from 'react'
import { UseDisabledFunctions } from '../../Hooks/useDisabled/useDisabled.Definition'

export interface LabelProps extends Omit<React.HTMLProps<HTMLLabelElement>, 'ref'> {
  children?: React.ReactNode
  disabled?: boolean
  description?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LabelFunctions extends UseDisabledFunctions {}

export type LabelReference = React.RefObject<typeof Label>
