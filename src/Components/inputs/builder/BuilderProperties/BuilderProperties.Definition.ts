import { BuilderIO } from '../Builder.Definition'
import BuilderProperties from './BuilderProperties'
import { HasBlocks } from '../../../../Traits/HasBlocks'
import { HasIO } from '../../../../Traits/HasIO'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderPropertiesProps extends HasIO<BuilderIO>, HasBlocks {
  setup?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderPropertiesFunctions {}

export type BuilderPropertiesReference = React.ElementRef<typeof BuilderProperties>
