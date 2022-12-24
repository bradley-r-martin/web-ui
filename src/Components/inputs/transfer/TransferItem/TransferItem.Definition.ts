import React from 'react'
import TransferItem from './TransferItem'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TransferItemProps {
  option: any
  remove: any
  item: any
  reorderable?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TransferItemFunctions {}

export type TransferItemReference = React.ElementRef<typeof TransferItem>
