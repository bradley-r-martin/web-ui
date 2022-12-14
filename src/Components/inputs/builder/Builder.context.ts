import { createContext, useContext } from 'react'

import { BuilderContext as Context } from './Builder.Definition'

export const BuilderContext = createContext<Context | null>(null)

export default function useBuilder() {
  const context = useContext(BuilderContext)
  if (context === null) {
    throw new Error('Cannot use useBuilder outside of a BuilderContext.')
  }
  return context
}

export function useBlock() {
  const [selected] = useBuilder().selected
  const [blocks] = useBuilder().blocks
  const templates = useBuilder().templates
  const block = blocks?.find((block) => block.id === selected)
  const template = templates.find((template) => template.namespace === block?.namespace)

  return [block, template] as const
}
