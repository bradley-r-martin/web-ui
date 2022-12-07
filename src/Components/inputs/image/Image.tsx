import { ImageFunctions, ImageProps } from './Image.Definition'
import { PaperClipIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { createRef, forwardRef, useImperativeHandle } from 'react'

import { Button } from '../../button'
import Conditional from '../../conditional/Conditional'
import { styleMap } from './Image.Styles'
import { useEnhancer } from '../../../Hooks/useEnhancer/useEnhancer'
import { useFile } from '../../../Hooks/useFileStaging/useFile'
import { useIO } from '../../../Hooks/useIO/useIO'

const Image: React.ForwardRefRenderFunction<ImageFunctions, ImageProps> = (props, ref) => {
  const { onUpload, ...native } = props

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  const [preview, upload, { uploading, progress, error }] = useFile({ value: input, onUpload })

  const inputRef = createRef<HTMLInputElement>()

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    const [file] = e.currentTarget.files ?? []

    if (file) {
      upload(file).then(output)
    }
  }

  function focus() {
    inputRef?.current?.focus()
  }
  useImperativeHandle(ref, () => ({ focus }))

  const { TopEnhancer, BottomEnhancer, LeftEnhancer, RightEnhancer } = useEnhancer({
    focus,
    enhancers: props.enhancers,
  })

  const classnames = styleMap(props)

  return (
    <>
      <div
        onMouseDown={(e) => {
          e.preventDefault()
          focus()
        }}
      >
        <LeftEnhancer {...props} />
        <div className='flex flex-col flex-1'>
          <TopEnhancer {...props} />
          <div className='flex-1 flex space-x-4'>
            <div className='h-14 w-14 flex'>
              <div className={classnames.input}>
                <div className={classnames.preview}>
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
            <span className='flex-1 flex items-center justify-start space-x-4'>
              <Button
                onClick={() => inputRef?.current?.click()}
                enhancers={{ left: () => <PaperClipIcon className='h-3 w-3' /> }}
                size='xs'
                disabled={uploading}
              >
                <Conditional expression={!uploading && !!input}>Change</Conditional>
                <Conditional expression={!uploading && !input}>Add image</Conditional>
                <Conditional expression={uploading}>uploading...</Conditional>
              </Button>
              <Conditional expression={!uploading && !!input}>
                <Button
                  type='button'
                  shape='circle'
                  size='sm'
                  onClick={() => {
                    if (inputRef.current) {
                      inputRef.current.value = ''
                    }
                    if (output) {
                      output(null)
                    }
                  }}
                >
                  <XMarkIcon className='h-3 w-3' />
                </Button>
              </Conditional>
            </span>
          </div>
          <BottomEnhancer {...props} />
        </div>
        <RightEnhancer {...props} />
      </div>

      {/* <Exception>Error</Exception> */}
    </>
  )
}

export default forwardRef(Image)
