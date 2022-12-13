import { FieldFunctions, FieldProps } from './Field.Definition'
import { InputFunctions, InputProps } from '../inputs/Input.Definition'
import React, { forwardRef, useContext, useId, useImperativeHandle, useRef, useState } from 'react'

import Conditional from '../conditional/Conditional'
import Exception from '../exception/Exception'
import FormContext from '../form/Form.Context'
import Input from '../inputs/Input'
import Label from '../label/Label'
import { LabelFunctions } from '../label/Label.Definition'
import _ from 'lodash'
import { styleMap } from './Field.Styles'
import { useDisabled } from '../../Hooks/useDisabled/useDisabled'
import { useIO } from '../../Hooks/useIO/useIO'

const Field: React.ForwardRefRenderFunction<FieldFunctions, FieldProps> = (
  props: FieldProps,
  ref,
) => {
  const { label, description, ...native } = props

  const form = useContext(FormContext)

  const name = props.name ?? useId()

  const i = form?.get ? form.get(name) : undefined
  const o = form?.set ? (value: unknown) => form.set(name, value) : undefined

  const labelRef = useRef<LabelFunctions>(null)
  const inputRef = useRef<InputFunctions>(null)
  const id = props?.id ?? useId()

  const [input, output] = useIO({ name: id, input: i, output: o })

  // const { isDisabled, enable, disable } = useDisabled({ disabled })

  useImperativeHandle(ref, () => ({
    input: inputRef.current,
    label: labelRef.current,
  }))

  const classnames = styleMap({ ...props })

  return (
    <div className={classnames.component}>
      <Conditional expression={!!label}>
        <Label htmlFor={id} ref={labelRef} description={description}>
          {label}
        </Label>
      </Conditional>
      <div className='flex flex-1 overflow-hidden'>
        <Input id={id} ref={inputRef} {...(native as InputProps)} input={input} output={output} />
        {/* {input ? <Exception>{JSON.stringify(input)}</Exception> : null} */}
      </div>
    </div>
  )
}

export default forwardRef(Field)
