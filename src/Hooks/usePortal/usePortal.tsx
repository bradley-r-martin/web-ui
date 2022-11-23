import ReactDOM from 'react-dom'
import { UsePortalProps } from './usePortal.Definition'

export function usePortal(props: UsePortalProps) {
  const { node = document.body } = props
  return ({ children }: { children: React.ReactNode }) => {
    return ReactDOM.createPortal(children, node)
  }
}
