import React, { FunctionComponent } from 'react'

import { ModalOverlayProps } from './ModalOverlay.Definition'
import { motion } from 'framer-motion'

const ModalOverlay: FunctionComponent<ModalOverlayProps> = (props) => {
  const { children, className, ...native } = props
  return (
    <motion.div
      key='overlay'
      className={`flex justify-center bg-black bg-opacity-25 absolute inset-0 w-auto h-auto ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'tween',
      }}
    >
      {children}
    </motion.div>
  )
}

export default ModalOverlay
