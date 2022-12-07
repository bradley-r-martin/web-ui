import Date from './Date'
import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'

export type DateIO = null | string

export interface DateProps extends HasIO<DateIO>, HasId, HasEnhancers, HasVariants {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DateFunctions {}

export type DateReference = React.ElementRef<typeof Date>
