import React, { FunctionComponent } from 'react'

import { ModalHeaderProps } from './ModalHeader.Definition'

const ModalHeader: FunctionComponent<ModalHeaderProps> = (props) => {
  const { children, className, ...native } = props
  return (
    <div
      className={`flex items-center justify-between font-semibold text-slate-600 select-none ${className}`}
      {...native}
    >
      {children}
    </div>
  )
}

export default ModalHeader
