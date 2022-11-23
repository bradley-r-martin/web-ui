import React, { FunctionComponent, useRef } from 'react'

import { Button } from '../../Components/button'
import { Modal } from '../../Components/modal'

const ModalContained: FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div ref={ref} className='border-2 border-red-500 h-64 w-64'></div>
      {ref.current ? (
        <Modal node={ref.current} size='lg:w-1/3'>
          <Modal.Header>
            <Modal.Title title='Contained' hero />
          </Modal.Header>
          <Modal.Content>Content</Modal.Content>
          <Modal.Footer align='right'>
            <Button variant='transparent'>Cancel</Button>
            <Button intent='primary'>Save</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  )
}

export default ModalContained
