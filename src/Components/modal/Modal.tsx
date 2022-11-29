import { ModalComposition, ModalProps } from './Modal.Definition'
import React, { FunctionComponent } from 'react'

import { Button } from '../button'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalTitle } from './ModalTitle'
import { Portal } from '../portal'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Modal: FunctionComponent<ModalProps> & ModalComposition = (props: ModalProps) => {
  const { children, onDismiss, size } = props

  return (
    <Portal>
      <div
        className='flex justify-center fixed inset-0  w-auto  h-auto items-end md:items-center overflow-hidden'
        style={{ zIndex: 200 }}
      >
        <motion.div
          key='overlay'
          className='flex justify-center bg-black bg-opacity-25 absolute inset-0  w-auto h-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'tween',
          }}
        ></motion.div>
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
          {children}
          {onDismiss ? (
            <span className='absolute top-3 right-3'>
              <Button size='sm' shape='circle' onClick={onDismiss}>
                <XMarkIcon style={{ height: 16, width: 16 }} />
              </Button>
            </span>
          ) : null}
        </motion.div>
      </div>
    </Portal>
  )
}

Modal.Header = ModalHeader
Modal.Footer = ModalFooter
Modal.Content = ModalContent
Modal.Title = ModalTitle
export default Modal
