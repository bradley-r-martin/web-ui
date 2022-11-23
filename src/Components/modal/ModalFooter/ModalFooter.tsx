import React, { FunctionComponent } from 'react'

import { ModalFooterProps } from './ModalFooter.Definition'

const ModalFooter: FunctionComponent<ModalFooterProps> = (props) => {
  const { children, className, align = 'center', ...native } = props

  function alignment() {
    switch (align) {
      case 'left':
        return 'justify-start'
      case 'right':
        return 'justify-end'
      case 'center':
        return 'items-center justify-center'
      case 'between':
        return 'justify-between'
      case 'fill':
        return 'justify-items-stretch'
    }
  }

  return (
    <div className={`flex p-3 pb-10 lg:pb-3 space-x-2 ${alignment()} ${className}`} {...native}>
      {children}
    </div>
  )
}

export default ModalFooter
