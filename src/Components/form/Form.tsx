import { FormFunctions, FormProps } from './Form.Definition'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

import FocusTrap from 'focus-trap-react'
import FormContext from './Form.Context'
import _ from 'lodash'
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
  const { children, locked, ...native } = props

  const [state, setState] = useState({})

  function get(path?: string) {
    if (path) {
      return _.get(props?.input ?? state, path)
    } else {
      return props?.input ?? state
    }
  }

  function set(path: string, value: unknown) {
    const updated = { ..._.set(props?.input ?? state, path, value) }
    if (props?.output) {
      props.output(updated)
    } else {
      setState(updated)
    }
  }

  useImperativeHandle(ref, () => ({}))

  return (
    <FormContext.Provider value={{ get, set }}>
      <FocusTrap active={locked} focusTrapOptions={{ escapeDeactivates: false }}>
        <div {...native}>{children}</div>
      </FocusTrap>
      {JSON.stringify(state)}
    </FormContext.Provider>
  )
}

export default forwardRef(Form)
