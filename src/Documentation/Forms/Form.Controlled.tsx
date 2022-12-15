import React, { FunctionComponent, useState } from 'react'

import { Button } from '../../Components/button'
import { Field } from '../../Components/field'
import { Form } from '../../expose'

const FormControlled: FunctionComponent = () => {
  const [disabled, setDisabled] = useState(false)

  function enableViaState() {
    setDisabled(false)
  }
  function disableViaState() {
    setDisabled(true)
  }

  return (
    <>
      <Form locked={false} disabled={disabled}>
        <div className='space-y-4'>
          <h1 className='text-lg border-b border-slate-300'>Form controlled</h1>
          <Field type='textbox' name='test' />
          <Field type='textarea' name='textarea-test' />
        </div>
      </Form>
      <div className='space-x-4 flex'>
        <Button onClick={enableViaState} disabled={!disabled}>
          enable
        </Button>
        <Button onClick={disableViaState} disabled={disabled}>
          disable
        </Button>
      </div>
    </>
  )
}

export default FormControlled
