import { createContext, useContext } from 'react'

import { TransferContext as Context } from './Transfer.Definition'

export const TransferContext = createContext<Context | null>(null)

export default function useTransfer() {
  const context = useContext(TransferContext)
  if (context === null) {
    throw new Error('Cannot use useTransfer outside of a TransferContext.')
  }
  return context
}
