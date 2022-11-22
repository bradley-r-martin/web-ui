import Date from './Date'
import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DateProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'>,
    HasEnhancers,
    HasVariants {
  inherit?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DateFunctions {}

export type DateReference = React.ElementRef<typeof Date>
