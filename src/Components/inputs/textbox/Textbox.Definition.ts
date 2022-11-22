import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'
import Textbox from './Textbox'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'>,
    HasEnhancers,
    HasVariants {
  inherit?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextboxFunctions {}

export type TextboxReference = React.ElementRef<typeof Textbox>
