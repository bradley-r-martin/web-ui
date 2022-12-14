import Date from './Date'
import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasName } from '../../../Traits/HasName'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'

export type DateIO = null | string

export interface DateProps extends HasIO<DateIO>, HasId, HasName, HasEnhancers, HasVariants {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DateFunctions {}

export type DateReference = React.ElementRef<typeof Date>
