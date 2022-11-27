import React, { FunctionComponent } from 'react'

import { StatusProps } from './Status.Definition'
import { styleMap } from './Status.styles'

const Status: FunctionComponent<StatusProps> = (props) => {
  const { intent = 'default', children, size = 'md', ...native } = props
  const classnames = styleMap({ intent, size })

  return (
    <div className={classnames.component} {...native}>
      {children}
    </div>
  )
}

export default Status
