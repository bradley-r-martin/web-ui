import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { TextboxFunctions, TextboxProps } from './Textbox.Definition'

import { styleMap } from './Textbox.Styles'
import { useDisabled } from '../../../Hooks/useDisabled/useDisabled'
import { useIO } from '../../../Hooks/useIO/useIO'

const Textbox: React.ForwardRefRenderFunction<TextboxFunctions, TextboxProps> = (
  props: TextboxProps,
  ref,
) => {
  const { ...native } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const { isDisabled } = useDisabled()

  function focus() {
    inputRef.current?.focus()
  }

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isDisabled })

  return (
    <div className={classnames.area}>
      <input
        ref={inputRef}
        type='text'
        className={'w-full outline-none p-1'}
        {...native}
        value={input}
        onChange={(e) => output(e.target.value)}
      />
    </div>
  )
}

export default forwardRef(Textbox)
