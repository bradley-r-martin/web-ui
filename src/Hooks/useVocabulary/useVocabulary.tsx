import {} from 'react'

import { UseVocabularyProps } from './useVocabulary.Definition'

export function useVocabulary(props: UseVocabularyProps) {
  const { value = '' } = props

  const words = () => {
    return value.split(/\b\S+\b/).length - 1
  }
  const characters = () => {
    return value.replace(/\s/g, '').length
  }
  const lines = () => {
    if (value.replace(/ /g, '').length > 0) {
      return value.split(/\r*\n/).length
    }
    return 0
  }

  return {
    words,
    characters,
    lines,
  }
}
