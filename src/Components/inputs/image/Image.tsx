import { ImageFunctions, ImageProps } from './Image.Definition'
import { PaperClipIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { createRef, forwardRef, useImperativeHandle } from 'react'

import { Button } from '../../button'
import Conditional from '../../conditional/Conditional'
import { styleMap } from './Image.Styles'
import { useFile } from '../../../Hooks/useFileStaging/useFile'

const Image: React.ForwardRefRenderFunction<ImageFunctions, ImageProps> = (props, ref) => {
  const { onChange, value, onUpload, ...native } = props

  const [preview, upload, { uploading, progress, error }] = useFile({ value, onUpload })

  const inputRef = createRef<HTMLInputElement>()

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    const [file] = e.currentTarget.files ?? []

    if (file) {
      upload(file).then(onChange)
    }
  }

  function focus() {
    inputRef?.current?.focus()
  }
  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap(props)

  return (
    <>
      <div className='flex-1 flex'>
        <div className='h-14 w-14 flex'>
          <div className={classnames.preview}>
            <div className='h-full w-full flex items-center justify-center relative'>
              <Conditional expression={!preview}>
                <PhotoIcon className='h-6 w-6 text-slate-500' style={{ strokeWidth: 1.5 }} />
              </Conditional>
              <Conditional expression={!!preview}>
                <div
                  className='bg-center bg-contain	bg-no-repeat absolute inset-2 rounded'
                  style={{ backgroundImage: `url(${preview})` }}
                ></div>
              </Conditional>
              <Conditional expression={uploading}>
                <div className='bg-white bg-opacity-80 text-slate-500 p-3 absolute inset-0 flex items-center justify-center'>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    viewBox='0 0 50 50'
                  >
                    <path
                      fill='currentColor'
                      d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'
                    >
                      <animateTransform
                        attributeType='xml'
                        attributeName='transform'
                        type='rotate'
                        from='0 25 25'
                        to='360 25 25'
                        dur='0.6s'
                        repeatCount='indefinite'
                      ></animateTransform>
                    </path>
                  </svg>
                </div>
              </Conditional>
            </div>
            <div className='inset-0 absolute rounded'>
              <input
                ref={inputRef}
                onChange={change}
                type='file'
                className='w-full h-full opacity-0'
              />
            </div>
          </div>
        </div>
        <div className='flex-1 px-3 flex flex-col items-start justify-center space-y-2'>
          <span className='flex items-center justify-center space-x-4'>
            <Button
              onClick={() => inputRef?.current?.click()}
              enhancers={{ left: () => <PaperClipIcon className='h-3 w-3' /> }}
              size='xs'
              disabled={uploading}
            >
              <Conditional expression={!uploading && !!value}>Change</Conditional>
              <Conditional expression={!uploading && !value}>Add image</Conditional>
              <Conditional expression={uploading}>uploading...</Conditional>
            </Button>
            <Conditional expression={!uploading && !!value}>
              <Button
                type='button'
                shape='circle'
                size='sm'
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = ''
                  }
                  if (onChange) {
                    onChange(null)
                  }
                }}
              >
                <XMarkIcon className='h-3 w-3' />
              </Button>
            </Conditional>
          </span>
        </div>
      </div>
      {/* <Exception>Error</Exception> */}
    </>
  )
}

export default forwardRef(Image)
