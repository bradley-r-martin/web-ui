import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasVariants } from '../../../Traits/HasVariants'
import Radio from './Radio'
import React from 'react'

export type RadioIO = null | boolean

export interface RadioProps extends HasIO<RadioIO>, HasId, HasEnhancers, HasVariants {
  value: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioFunctions {}

export type RadioReference = React.ElementRef<typeof Radio>
