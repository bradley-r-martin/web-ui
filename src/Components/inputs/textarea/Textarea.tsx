import { TextareaFunctions, TextareaProps } from './Textarea.Definition'
import { forwardRef, useImperativeHandle } from 'react'

import { useDisabled } from '../../../Hooks/useDisabled/useDisabled'

const Textarea: React.ForwardRefRenderFunction<TextareaFunctions, TextareaProps> = (
  props: TextareaProps,
  ref,
) => {
  const { disabled, inherit, ...native } = props

  const { isDisabled, enable, disable } = useDisabled({ disabled, inherit })

  const words = () => {
    return 8
  }

  useImperativeHandle(ref, () => ({ enable, disable, words }))

  return <textarea disabled={isDisabled} {...native} />
}

export default forwardRef(Textarea)
