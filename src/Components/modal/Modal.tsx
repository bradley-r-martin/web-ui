import { ModalComposition, ModalProps } from './Modal.Definition'
import React, { Fragment, FunctionComponent } from 'react'

import { Button } from '../button'
import { ModalContainer } from './ModalContainer'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalOverlay } from './ModalOverlay'
import { ModalTitle } from './ModalTitle'
import { Portal } from '../portal'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Modal: FunctionComponent<ModalProps> & ModalComposition = (props: ModalProps) => {
  const { children, onDismiss, size } = props

  const { portal: Portlet = Portal } = props
  const { overlay: Overlay = ModalOverlay } = props
  const { container: Container = ModalContainer } = props

  return (
    <Portlet>
      <Container>
        <Overlay />
        <motion.div
          key='modal'
          className={`bg-white relative shadow-2xl rounded-t-2xl max-h-full overflow-auto  md:rounded-md max-w-full w-full md:w-auto z-30 ${size}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            type: 'tween',
          }}
        >
          <div className='divide-y divide-gray-200 max-h-full overflow-auto max-w-full w-full'>
            {children}
          </div>
          {onDismiss ? (
            <span className='absolute top-3 right-3'>
              <Button size='sm' shape='circle' onClick={onDismiss}>
                <XMarkIcon style={{ height: 16, width: 16 }} />
              </Button>
            </span>
          ) : null}
        </motion.div>
      </Container>
    </Portlet>
  )
}

Modal.Header = ModalHeader
Modal.Footer = ModalFooter
Modal.Content = ModalContent
Modal.Title = ModalTitle
export default Modal
