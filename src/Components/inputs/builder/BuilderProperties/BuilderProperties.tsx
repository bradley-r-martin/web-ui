import { BuilderPropertiesFunctions, BuilderPropertiesProps } from './BuilderProperties.Definition'
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { forwardRef, useImperativeHandle } from 'react'

import { Button } from '../../../button'
import { Field } from '../../../field'
import useBuilder from '../Builder.context'

const BuilderProperties: React.ForwardRefRenderFunction<
  BuilderPropertiesFunctions,
  BuilderPropertiesProps
> = (props: BuilderPropertiesProps, ref) => {
  const { blocks, input, setup, ...native } = props

  const [selected, setSelected] = useBuilder().selected
  const selectedBlock = input?.find((block) => block.id === selected)

  const block = blocks?.find((block) => block.namespace === selectedBlock?.namespace)

  const group = block?.namespace.split('/')[0] ?? ''
  const name = block?.namespace.split('/')[1] ?? ''

  useImperativeHandle(ref, () => ({}))

  return (
    <div className='w-1/4 bg-slate-50 shadow-xl  border-l border-slate-200 overflow-auto relative'>
      {block ? (
        <>
          <div className='bg-black bg-opacity-40 absolute inset-0'></div>
          <div className='bg-slate-50 shadow-xl absolute top-20 left-0 right-0 bottom-0 p-4'>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <div className='text-slate-600 text-xs font-light'>{group}</div>
                <div className='text-slate-600 text-sm font-bold'>{name}</div>
              </div>
              <div>
                <Button shape='circle' size='xs' onClick={() => setSelected('')}>
                  <XMarkIcon className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='space-y-2'>
              {block.fields.map((field, i) => {
                return (
                  <div key={i} className='text-xs'>
                    <Field {...field} />
                  </div>
                )
              })}
            </div>
          </div>
        </>
      ) : null}
      {setup}
      {/* <div className='font-semibold text-xs text-slate-600 border-b border-t border-slate-200 bg-slate-100 px-4 py-3 '>
              Section
            </div> */}
    </div>
  )
}

export default forwardRef(BuilderProperties)
