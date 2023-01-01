import React, { FunctionComponent } from 'react'

import LoadingBar from '../../loading-bar/LoadingBar'
import { ModalContentProps } from './ModalContent.Definition'

const ModalContent: FunctionComponent<ModalContentProps> = (props) => {
  const { children, className, loading, ...native } = props
  return (
    <div className={`bg-gray-50 relative overflow-hidden  ${className}`} {...native}>
      <LoadingBar loading={loading}>
        <div className='p-5'>{children}</div>
      </LoadingBar>
    </div>
  )
}

export default ModalContent
