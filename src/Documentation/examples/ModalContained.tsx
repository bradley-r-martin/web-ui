import React, { FunctionComponent, useRef } from 'react'

import { Button } from '../../Components/button'
import { Modal } from '../../Components/modal'

const ModalContained: FunctionComponent = () => {
  return (
    <Modal size='lg:w-1/3'>
      <Modal.Header>
        <Modal.Title title='Contained' hero />
      </Modal.Header>
      <Modal.Content>Content</Modal.Content>
      <Modal.Footer align='right'>
        <Button variant='transparent'>Cancel</Button>
        <Button intent='primary'>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalContained
