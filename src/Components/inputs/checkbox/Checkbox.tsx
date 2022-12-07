import { CheckboxFunctions, CheckboxProps } from './Checkbox.Definition'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { styleMap } from './Checkbox.Styles'
import { useIO } from '../../../Hooks/useIO/useIO'

const Checkbox: React.ForwardRefRenderFunction<CheckboxFunctions, CheckboxProps> = (
  props: CheckboxProps,
  ref,
) => {
  const { ...native } = props

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    inputRef.current?.focus()
  }

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isChecked: input })

  return (
    <div className={classnames.component}>
      <div className={classnames.checkbox}>
        <div className={classnames.checkmark}>
          <XMarkIcon className={classnames.icon} />
        </div>
        <input
          ref={inputRef}
          type='checkbox'
          className={classnames.input}
          onChange={() => output(!input)}
          {...native}
        />
      </div>
    </div>
  )
}

export default forwardRef(Checkbox)
