import { FieldFunctions, FieldProps } from './Field.Definition'
import { Ref, forwardRef, useId, useImperativeHandle, useRef } from 'react'

import Input from '../inputs/Input'
import { InputReference } from '../inputs/Input.Definition'
import Label from '../label/Label'
import { LabelReference } from '../label/Label.Definition'

const Field: React.ForwardRefRenderFunction<FieldFunctions, FieldProps> = (
  props: FieldProps,
  ref,
) => {
  const { label } = props

  const labelRef = useRef<LabelReference>(null)
  const inputRef = useRef<InputReference>(null)
  const id = useId()
  useImperativeHandle(ref, () => ({}))

  return (
    <>
      <Label htmlFor={id} ref={labelRef}>
        {label}
      </Label>
      <Input type='textbox' ref={inputRef} />
    </>
  )
}

export default forwardRef(Field)
