import { InputFunctions, InputProps } from './Input.Definition'
import React, { ForwardedRef, forwardRef } from 'react'

import Textarea from './textarea/Textarea'
import { TextareaFunctions, TextareaProps } from './textarea/Textarea.Definition'
import Textbox from './textbox/Textbox'
import { TextboxProps } from './textbox/Textbox.Definition'

const Input: React.ForwardRefRenderFunction<InputFunctions, InputProps> = (
  props: InputProps,
  ref,
) => {
  const { type, ...native } = props

  switch (type) {
    case 'textbox':
      return <Textbox ref={ref} {...(native as TextboxProps)} />
    case 'textarea' :
      return <Textarea ref={ref as ForwardedRef<TextareaFunctions>} {...(native as TextareaProps)} />
    default:
      return <>Unknown input type</>
  }
}

export default forwardRef(Input)
