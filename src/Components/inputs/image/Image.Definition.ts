import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasVariants } from '../../../Traits/HasVariants'
import Image from './Image'

export type ImageIO = null | {
  uuid: string
  key: string
  bucket: string
  name: string
  contentType: string
  url: string
}

export interface ImageProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'value'>,
    HasEnhancers,
    HasVariants {
  inherit?: boolean
  value?: ImageIO
  onChange: (image: ImageIO) => void
  onUpload: (file: File) => Promise<ImageIO>
}

export type ImageFunctions = {
  focus: VoidFunction
}

export type ImageReference = React.ElementRef<typeof Image>
