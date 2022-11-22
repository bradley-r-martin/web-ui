import { FunctionComponent } from 'react'
import { UseVocabularyFunctions } from '../../../Hooks/useVocabulary/useVocabulary.Definition'

type VocabularyProps = UseVocabularyFunctions

const Vocabulary: FunctionComponent<VocabularyProps> = (props) => {
  const { words, characters, lines } = props
  return (
    <div className=' flex-1 flex justify-start items-center mx-2 py-1 text-xs border-t border-dashed border-slate-300 text-slate-500'>
      {words()} words, {characters()} characters, {lines()} lines
    </div>
  )
}

export default Vocabulary
