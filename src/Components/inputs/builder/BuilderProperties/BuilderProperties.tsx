import { BuilderPropertiesFunctions, BuilderPropertiesProps } from './BuilderProperties.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import { Field } from '../../../field'
import useBuilder from '../Builder.context'

const BuilderProperties: React.ForwardRefRenderFunction<
  BuilderPropertiesFunctions,
  BuilderPropertiesProps
> = (props: BuilderPropertiesProps, ref) => {
  const { blocks, input, ...native } = props

  const [selected] = useBuilder().selected
  const selectedBlock = input?.find((block) => block.id === selected)

  const block = blocks?.find((block) => block.namespace === selectedBlock?.namespace)

  useImperativeHandle(ref, () => ({}))

  return (
    <div className='w-1/4 bg-slate-50 shadow-xl  border-l border-slate-200 overflow-auto'>
      {block ? (
        <>
          <div className='font-semibold text-xs text-slate-600  px-4 py-3 '>{block.namespace}</div>
          <div className='px-4'>
            {block.fields.map((field, i) => {
              return (
                <div key={i} className='text-xs'>
                  <Field {...field} />
                </div>
              )
            })}
          </div>
        </>
      ) : null}
      {/* <div className='font-semibold text-xs text-slate-600 border-b border-t border-slate-200 bg-slate-100 px-4 py-3 '>
              Section
            </div> */}
    </div>
  )
}

export default forwardRef(BuilderProperties)
