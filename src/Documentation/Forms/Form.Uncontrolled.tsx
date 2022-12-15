import React, { FunctionComponent, useRef } from 'react'

import { Button } from '../../Components/button'
import { Field } from '../../Components/field'
import { Form } from '../../expose'
import { FormFunctions } from '../../Components/form/Form.Definition'
import WebUIConfig from '../../Config/WebUIConfig'

const FormUncontrolled: FunctionComponent = () => {
  const form = useRef<FormFunctions>(null)

  function enableViaRef() {
    form.current?.enable()
  }
  function disableViaRef() {
    form.current?.disable()
  }

  return (
    <>
      <Form ref={form} locked={false}>
        <div className='space-y-4'>
          <h1 className='text-lg border-b border-slate-300'>Form uncontrolled</h1>
          <Field type='textbox' name='test' label='textbox:' />
          <Field type='textarea' name='textarea-test' label='textarea:' />
          <div className='flex space-x-4'>
            <div>
              <Field type='radio' name='radio-test' value='active' label='active' inline />
            </div>
            <div>
              <Field type='radio' name='radio-test' value='inactive' label='inactive' inline />
            </div>
          </div>
          <Field
            type='transfer'
            name='transfer-test'
            label='transfer:'
            options={[
              { id: 'test', text: 'Test' },
              { id: 'test-2', text: 'Test 2' },
            ]}
          />
          <WebUIConfig>
            <Field type='image' name='image-test' />
          </WebUIConfig>
        </div>
      </Form>
      <div className='space-x-4 flex'>
        <Button onClick={enableViaRef}>enable</Button>
        <Button onClick={disableViaRef}>disable</Button>
      </div>
    </>
  )
}

export default FormUncontrolled
