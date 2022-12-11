import { BuilderIO } from '../Builder.Definition'
import { HasBlocks } from '../../../../Traits/HasBlocks'
import { HasIO } from '../../../../Traits/HasIO'
import Library from './Library'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LibraryProps extends HasBlocks, HasIO<BuilderIO> {
  isOpen: boolean
  onClose: () => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LibraryFunctions {}

export type LibraryReference = React.ElementRef<typeof Library>
