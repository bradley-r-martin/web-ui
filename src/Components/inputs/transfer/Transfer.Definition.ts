import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasName } from '../../../Traits/HasName'
import { HasOptions } from '../../../Traits/HasOptions'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'
import Transfer from './Transfer'

export type TransferIO = null | string[]
export interface TransferProps
  extends HasIO<TransferIO>,
    HasId,
    HasName,
    HasOptions,
    HasEnhancers,
    HasVariants {
  item?: (input: unknown) => React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TransferFunctions {}

export type TransferReference = React.ElementRef<typeof Transfer>
