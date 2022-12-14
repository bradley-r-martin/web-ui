import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { TextareaFunctions, TextareaProps } from './Textarea.Definition'

import { styleMap } from './Textarea.Styles'
import { useIO } from '../../../Hooks/useIO/useIO'

const Textarea: React.ForwardRefRenderFunction<TextareaFunctions, TextareaProps> = (
  props: TextareaProps,
  ref,
) => {
  const { ...native } = props

  const inputRef = useRef<HTMLTextAreaElement>(null)

  function focus() {
    inputRef.current?.focus()
  }

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })
  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap(props)

  return (
    <div className={classnames.area}>
      <textarea
        ref={inputRef}
        className={'w-full outline-none p-1'}
        style={{
          minHeight: 100,
          maxHeight: 400,
          height: '100%',
        }}
        value={input}
        onChange={(e) => output(e.target.value)}
        {...native}
      />
    </div>
  )
}

export default forwardRef(Textarea)
