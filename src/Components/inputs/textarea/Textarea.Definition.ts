import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasName } from '../../../Traits/HasName'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'
import Textarea from './Textarea'

export type TextareaIO = null | string

export interface TextareaProps
  extends HasIO<TextareaIO>,
    HasId,
    HasName,
    HasEnhancers,
    HasVariants {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextareaFunctions {}

export type TextareaReference = React.ElementRef<typeof Textarea>
