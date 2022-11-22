import { TextareaFunctions, TextareaProps } from './Textarea.Definition'
import { forwardRef, useImperativeHandle, useRef } from 'react'

import { styleMap } from './Textarea.Styles'

const Textarea: React.ForwardRefRenderFunction<TextareaFunctions, TextareaProps> = (
  props: TextareaProps,
  ref,
) => {
  const { ...native } = props

  const inputRef = useRef<HTMLTextAreaElement>(null)

  function focus() {
    inputRef.current?.focus()
  }

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap(props)

  return (
    <textarea
      ref={inputRef}
      className={classnames.input}
      style={{
        minHeight: 100,
        maxHeight: 400,
        height: '100%',
      }}
      {...native}
    />
  )
}

export default forwardRef(Textarea)
