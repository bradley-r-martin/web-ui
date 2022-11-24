import { PortalProps } from './Portal.Definition'
import ReactDOM from 'react-dom'

export function Portal(props: PortalProps) {
  const { node = document.body, children } = props
  return ReactDOM.createPortal(children, node)
}
