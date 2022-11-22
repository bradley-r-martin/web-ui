import { TextboxFunctions, TextboxProps } from './Textbox.Definition'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import { styleMap } from './Textbox.Styles'

const Textbox: React.ForwardRefRenderFunction<TextboxFunctions, TextboxProps> = (
  props: TextboxProps,
  ref,
) => {
  const { className, ...native } = props

  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    inputRef.current?.focus()
  }

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap(props)

  return (
    <input ref={inputRef} type='text' className={`${classnames.input} ${className}`} {...native} />
  )
}

export default forwardRef(Textbox)
