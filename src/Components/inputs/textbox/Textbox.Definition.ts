import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'
import Textbox from './Textbox'

export type TextboxIO = null | string
export interface TextboxProps extends HasIO<TextboxIO>, HasId, HasEnhancers, HasVariants {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextboxFunctions {}

export type TextboxReference = React.ElementRef<typeof Textbox>
