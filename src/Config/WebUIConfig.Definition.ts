import { ImageIO } from '../Components/inputs/image/Image.Definition'

export interface WebUIConfigProps {
  children: React.ReactNode
}

export interface WebUIConfigContext {
  fileUpload?: (file: File) => Promise<ImageIO>
}
