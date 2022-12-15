import React, { FunctionComponent, useState } from 'react'

import { Button } from '../../Components/button'
import Conditional from '../../Components/conditional/Conditional'
import { Modal } from '../../Components/modal'

const ModalPopup: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  function open() {
    setOpen(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <>
      <Button onClick={() => open()}>Popup</Button>
      <Conditional expression={isOpen}>
        <Modal size='lg:w-1/3'>
          <Modal.Content loading={isLoading}>Content</Modal.Content>
          <Modal.Footer align='right'>
            <Button variant='transparent' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button intent='primary' onClick={() => setOpen(false)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Conditional>
    </>
  )
}

export default ModalPopup
