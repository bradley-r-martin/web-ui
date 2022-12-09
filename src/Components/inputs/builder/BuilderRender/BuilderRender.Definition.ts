import { BuilderIO } from '../Builder.Definition'
import BuilderRender from './BuilderRender'
import { HasBlocks } from '../../../../Traits/HasBlocks'
import { HasIO } from '../../../../Traits/HasIO'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderRenderProps extends HasBlocks, HasIO<BuilderIO> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderRenderFunctions {}

export type BuilderRenderReference = React.ElementRef<typeof BuilderRender>
