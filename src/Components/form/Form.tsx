import { FormFunctions, FormProps } from './Form.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import Input from '../inputs/Input'
import { useDisabled } from '../../Hooks/useDisabled/useDisabled'
import { useFocused } from '../../Hooks/useFocused/useFocused'
import { useForm } from '../../Hooks/useForm'

/* Form
   A synthetic form component that acts like a regular HTML form without some of the cavets of a HTML form.
   - Can be nested in other forms.
   - Can be focus locked
   - Can inherit values of child forms if desired.
   - Can disable nested field elements sinilar to fieldset


*/

const Form: React.ForwardRefRenderFunction<FormFunctions, FormProps> = (props: FormProps, ref) => {
  const { children, disabled, focused, inherit, values } = props

  const { isDisabled, enable, disable, DisabledContext } = useDisabled({ disabled, inherit })
  const { isFocused, focus, blur, FocusedContext } = useFocused({ focused, inherit })

  const [formValues, set, clear, fresh] = useForm(values)

  useImperativeHandle(ref, () => ({
    disable,
    enable,
    focus,
    blur,
    clear,
    fresh,
    values: formValues,
  }))

  return (
    <DisabledContext>
      <FocusedContext>
        <div style={{ padding: 3 }}>
          {disabled === undefined ? 'U' : 'D'}
          <Input type='textbox' />
          <button onClick={isDisabled ? () => enable() : () => disable()}>toggle [Form]</button>
        </div>
        <div style={{ paddingLeft: 40 }}>{children}</div>
      </FocusedContext>
    </DisabledContext>
  )
}

export default forwardRef(Form)
