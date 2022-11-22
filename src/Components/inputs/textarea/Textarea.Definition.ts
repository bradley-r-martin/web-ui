import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'
import Textarea from './Textarea'
import { UseDisabledFunctions } from '../../../Hooks/useDisabled/useDisabled.Definition'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextareaProps
  extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'ref'>,
    HasEnhancers,
    HasVariants {
  inherit?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextareaFunctions {}

export type TextareaReference = React.ElementRef<typeof Textarea>
