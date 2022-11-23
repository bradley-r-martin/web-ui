import { ExceptionFunctions, ExceptionProps } from './Exception.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { styleMap } from './Exception.Styles'

const Exception: React.ForwardRefRenderFunction<ExceptionFunctions, ExceptionProps> = (
  props: ExceptionProps,
  ref,
) => {
  const { children } = props

  useImperativeHandle(ref, () => ({}))

  const classnames = styleMap()

  return (
    <span className={classnames.component}>
      <ExclamationCircleIcon className='h-5 w-5 mr-0.5 flex-shrink-0' />
      <span>{children}</span>
    </span>
  )
}

export default forwardRef(Exception)
