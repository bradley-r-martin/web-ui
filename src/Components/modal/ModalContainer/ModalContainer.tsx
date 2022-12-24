import React, { FunctionComponent } from 'react'

import { ModalContainerProps } from './ModalContainer.Definition'

const ModalContainer: FunctionComponent<ModalContainerProps> = (props) => {
  const { children, ...native } = props
  return (
    <div
      className='flex justify-center fixed inset-0  w-auto h-auto items-end md:items-center overflow-hidden'
      style={{ zIndex: 200 }}
    >
      {children}
    </div>
  )
}

export default ModalContainer
