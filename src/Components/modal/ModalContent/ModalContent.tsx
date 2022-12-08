import React, { FunctionComponent } from 'react'

import { ModalContentProps } from './ModalContent.Definition'

const ModalContent: FunctionComponent<ModalContentProps> = (props) => {
  const { children, className, ...native } = props
  return (
    <div className={`bg-gray-50 border-y border-gray-200 ${className}`} {...native}>
      {children}
    </div>
  )
}

export default ModalContent
