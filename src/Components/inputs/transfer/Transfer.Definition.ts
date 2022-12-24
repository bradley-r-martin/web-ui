import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasName } from '../../../Traits/HasName'
import { HasOptions } from '../../../Traits/HasOptions'
import { HasVariants } from '../../../Traits/HasVariants'
import React from 'react'
import Transfer from './Transfer'

export type TransferIO = null | string[]

export interface TransferContext {
  item?: (input: unknown) => React.ReactNode

  io: [TransferIO, (value: TransferIO) => void]
}

export interface TransferProps
  extends HasIO<TransferIO>,
    HasId,
    HasName,
    HasOptions,
    HasEnhancers,
    HasVariants {
  item?: (input: unknown) => React.ReactNode
  orderable?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TransferFunctions {}

export type TransferReference = React.ElementRef<typeof Transfer>
