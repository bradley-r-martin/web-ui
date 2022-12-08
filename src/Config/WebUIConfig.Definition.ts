import { ImageIO } from '../Components/inputs/image/Image.Definition'

export interface WebUIConfigProps {
  children: React.ReactNode
  fileUpload?: (file: File) => Promise<ImageIO>
}

export interface WebUIConfigContext {
  fileUpload?: (file: File) => Promise<ImageIO>
}
