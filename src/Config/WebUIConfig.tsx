import React, { FunctionComponent } from 'react'

import { WebUIConfigProps } from './WebUIConfig.Definition'
import { WebUIContext } from './WebUIConfig.Context'

const WebUIConfig: FunctionComponent<WebUIConfigProps> = (props) => {
  const { children, ...native } = props
  return <WebUIContext.Provider value={native}>{children}</WebUIContext.Provider>
}

export default WebUIConfig
