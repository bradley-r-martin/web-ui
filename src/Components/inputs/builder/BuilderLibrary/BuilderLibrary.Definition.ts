import { BuilderIO } from '../Builder.Definition'
import BuilderLibrary from './BuilderLibrary'
import { HasBlocks } from '../../../../Traits/HasBlocks'
import { HasIO } from '../../../../Traits/HasIO'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderLibraryProps extends HasBlocks, HasIO<BuilderIO> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderLibraryFunctions {}

export type BuilderLibraryReference = React.ElementRef<typeof BuilderLibrary>
