import { RadioFunctions, RadioProps } from './Radio.Definition'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { styleMap } from './Radio.Styles'
import { useIO } from '../../../Hooks/useIO/useIO'

const Radio: React.ForwardRefRenderFunction<RadioFunctions, RadioProps> = (
  props: RadioProps,
  ref,
) => {
  const { value, ...native } = props

  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    inputRef.current?.focus()
  }

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isChecked: input === value })

  return (
    <div className={classnames.component}>
      <div className={classnames.checkbox}>
        <div className={classnames.checkmark}></div>
        <input
          ref={inputRef}
          type='radio'
          className={classnames.input}
          onClick={() => output(input === value ? null : value)}
          checked={input === value}
          {...native}
        />
      </div>
    </div>
  )
}

export default forwardRef(Radio)
