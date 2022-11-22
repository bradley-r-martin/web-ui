import React from 'react'
import { UseDisabledFunctions } from '../../Hooks/useDisabled/useDisabled.Definition'

export type FieldsetProps = {
  children: React.ReactNode
  disabled?: boolean
  stacked?: boolean
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FieldsetFunctions extends UseDisabledFunctions {}
