import React from 'react'
import Textbox from './Textbox'
import { UseDisabledFunctions } from '../../../Hooks/useDisabled/useDisabled.Definition'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  inherit?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextboxFunctions extends UseDisabledFunctions {}

export type TextboxReference = React.ElementRef<typeof Textbox>
