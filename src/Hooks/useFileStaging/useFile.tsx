import { useEffect, useState } from 'react'

import { ImageIO } from '../../Components/inputs/image/Image.Definition'
import { UseFileProps } from './useFile.Definition'
import useWebUIConfig from '../../Config/useWebConfig'
import { v4 as uuid } from 'uuid'

export function useFile(props: UseFileProps) {
  const config = useWebUIConfig()
  const [preview, setPreview] = useState<string | null>()
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState()

  useEffect(() => {
    if (props.value) {
      setPreview(props.value.url)
    } else {
      setPreview(null)
    }
  }, [props.value])

  function uploadAdapter() {
    if (props.onUpload) {
      return props.onUpload
    } else if (config.fileUpload) {
      return config.fileUpload
    }
    return (file: File) =>
      new Promise<ImageIO>((resolve) => {
        setTimeout(() => {
          const id = uuid()
          resolve({
            uuid: id,
            key: `tmp/${id}`,
            bucket: '',
            name: file.name,
            contentType: file.type,
            url: `${preview}`,
          })
        }, 2000)
      })
  }

  function upload(file: File) {
    setPreview(URL.createObjectURL(file))
    setUploading(true)
    return new Promise<ImageIO>((resolve) => {
      uploadAdapter()(file).then((FileIO) => {
        setUploading(false)
        resolve(FileIO)
      })
    })
  }

  return [preview, upload, { uploading, progress, error }] as const
}
