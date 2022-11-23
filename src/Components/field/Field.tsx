import { FieldFunctions, FieldProps } from './Field.Definition'
import { InputFunctions, InputProps } from '../inputs/Input.Definition'
import React, { forwardRef, useId, useImperativeHandle, useRef } from 'react'

import Exception from '../exception/Exception'
import Input from '../inputs/Input'
import Label from '../label/Label'
import { LabelFunctions } from '../label/Label.Definition'
import { useDisabled } from '../../Hooks/useDisabled/useDisabled'

const Field: React.ForwardRefRenderFunction<FieldFunctions, FieldProps> = (
  props: FieldProps,
  ref,
) => {
  const { label, description, disabled, ...native } = props

  const labelRef = useRef<LabelFunctions>(null)
  const inputRef = useRef<InputFunctions>(null)
  const id = useId()

  const { isDisabled, enable, disable } = useDisabled({ disabled })

  useImperativeHandle(ref, () => ({
    input: inputRef.current,
    label: labelRef.current,
    enable,
    disable,
  }))

  return (
    <>
      <Label htmlFor={id} ref={labelRef} disabled={isDisabled} description={description}>
        {label}
      </Label>
      <div>
        <Input id={id} ref={inputRef} disabled={isDisabled} {...(native as InputProps)} />
        {/* <Exception /> */}
      </div>
    </>
  )
}

export default forwardRef(Field)
