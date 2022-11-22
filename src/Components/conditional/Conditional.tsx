import React, { FunctionComponent } from 'react'

import { ConditionalProps } from './Conditional.Definition'

const Conditional: FunctionComponent<ConditionalProps> = (props) => {
  const { expression, children } = props
  if (expression) {
    return <>{children}</>
  }
  return <></>
}

export default Conditional
