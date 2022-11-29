import { ImageIO } from '../../Components/inputs/image/Image.Definition'

export interface UseFileProps {
  value?: ImageIO
  onUpload?: (file: File) => Promise<ImageIO>
}
