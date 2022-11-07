import { TextboxFunctions, TextboxProps } from './Textbox.Definition'
import { forwardRef, useImperativeHandle } from 'react'

import { useDisabled } from '../../../Hooks/useDisabled/useDisabled'

const Textbox: React.ForwardRefRenderFunction<TextboxFunctions, TextboxProps> = (
  props: TextboxProps,
  ref,
) => {
  const { disabled, inherit, ...native } = props

  const { isDisabled, enable, disable } = useDisabled({ disabled, inherit })

  useImperativeHandle(ref, () => ({ enable, disable }))

  return <input type='text' disabled={isDisabled} {...native} />
}

export default forwardRef(Textbox)
