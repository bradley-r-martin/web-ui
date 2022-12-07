import Checkbox from './Checkbox'
import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'

export type CheckboxIO = null | boolean

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps extends HasIO<CheckboxIO>, HasId, HasEnhancers, HasVariants {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxFunctions {}

export type CheckboxReference = React.ElementRef<typeof Checkbox>
