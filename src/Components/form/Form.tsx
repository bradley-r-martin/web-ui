import { FormFunctions, FormProps } from './Form.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import { Button } from '../button'
import FocusTrap from 'focus-trap-react'
import FormContext from './Form.Context'
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
  const { children, ...native } = props

  useImperativeHandle(ref, () => ({}))

  return (
    <FocusTrap active={true} focusTrapOptions={{ escapeDeactivates: false }}>
      <div {...native}>{children}</div>
    </FocusTrap>
  )
}

export default forwardRef(Form)
