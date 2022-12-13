import React, { Dispatch, SetStateAction } from 'react'

import Builder from './Builder'
import { HasBlocks } from '../../../Traits/HasBlocks'
import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasVariants } from '../../../Traits/HasVariants'

export type Screen = 'desktop' | 'tablet' | 'phone'

export interface BuilderContext {
  selected: [string, Dispatch<SetStateAction<string>>]
  scale: [number, Dispatch<SetStateAction<number>>]
  screen: [Screen, Dispatch<SetStateAction<Screen>>]
  library: [boolean, Dispatch<SetStateAction<boolean>>]
}

export type BuilderIO = null | { id: string; namespace: string }[]

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderProps
  extends HasIO<BuilderIO>,
    HasBlocks,
    HasId,
    HasEnhancers,
    HasVariants {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderFunctions {}

export type BuilderReference = React.ElementRef<typeof Builder>
