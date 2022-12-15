import React, { FunctionComponent, useState } from 'react'

import { Button } from '../../Components/button'
import Conditional from '../../Components/conditional/Conditional'
import { Modal } from '../../Components/modal'

const ModalHero: FunctionComponent = () => {
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
      <Button onClick={() => open()}>Open</Button>
      <Conditional expression={isOpen}>
        <Modal size='lg:w-1/3'>
          <div>
            <Modal.Header>
              <Modal.Title title='Contained' hero />
            </Modal.Header>
            {/* <Modal.Content loading={isLoading}>Content</Modal.Content> */}
            <Modal.Footer align='right'>
              <Button variant='transparent' onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button intent='primary' onClick={() => setOpen(false)}>
                Save
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </Conditional>
    </>
  )
}

export default ModalHero
