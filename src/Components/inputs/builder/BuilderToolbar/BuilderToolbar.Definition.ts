import BuilderToolbar from './BuilderToolbar'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderToolbarProps {
  screen: 'mobile' | 'tablet' | 'desktop'
  setScreen: (screen: string) => void
  isOpen: boolean
  toggleOpen: () => void
  scale: number
  setScale: (scale: number) => void
  handle: any
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BuilderToolbarFunctions {}

export type BuilderToolbarReference = React.ElementRef<typeof BuilderToolbar>
