import { HasEnhancers } from '../../../Traits/HasEnhancers'
import { HasIO } from '../../../Traits/HasIO'
import { HasId } from '../../../Traits/HasId'
import { HasName } from '../../../Traits/HasName'
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

export interface ImageProps extends HasIO<ImageIO>, HasId, HasName, HasEnhancers, HasVariants {
  inherit?: boolean
  onUpload: (file: File) => Promise<ImageIO>
}

export type ImageFunctions = {
  focus: VoidFunction
}

export type ImageReference = React.ElementRef<typeof Image>
