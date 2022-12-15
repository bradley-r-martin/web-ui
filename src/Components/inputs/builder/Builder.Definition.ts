import React, { Dispatch, SetStateAction } from 'react'

import Builder from './Builder'
import { HasBlocks } from '../../../Traits/HasBlocks'
import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasName } from '../../../Traits/HasName'
import { HasVariants } from '../../../Traits/HasVariants'
import TypeOfBlock from '../../../Types/TypeOfBlock'

export type Screen = 'desktop' | 'tablet' | 'phone'

export interface BuilderContext {
  selected: [string, Dispatch<SetStateAction<string>>]
  scale: [number, Dispatch<SetStateAction<number>>]
  screen: [Screen, Dispatch<SetStateAction<Screen>>]
  library: [boolean, Dispatch<SetStateAction<boolean>>]
  blocks: [BuilderIO, (value: BuilderIO) => void]
  templates: TypeOfBlock[]
  head?: string
}

export type BuilderIO = null | { id: string; namespace: string; data: { [key: string]: any } }[]

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderProps
  extends HasIO<BuilderIO>,
    HasBlocks,
    HasId,
    HasName,
    HasEnhancers,
    HasVariants {
  setup?: React.ReactNode
  head?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderFunctions {}

export type BuilderReference = React.ElementRef<typeof Builder>
