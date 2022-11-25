import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalTitle } from './ModalTitle'

export interface ModalProps {
  children: React.ReactNode
  size?: any
  onDismiss?: () => void
  isOpen?: boolean
}

export interface ModalComposition {
  Header: typeof ModalHeader
  Footer: typeof ModalFooter
  Content: typeof ModalContent
  Title: typeof ModalTitle
}
