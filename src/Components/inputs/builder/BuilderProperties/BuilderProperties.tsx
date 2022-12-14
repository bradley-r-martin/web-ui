import { BuilderPropertiesFunctions, BuilderPropertiesProps } from './BuilderProperties.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import BuilderPropertiesInput from './BuilderProperties.Input'
import BuilderPropertiesPanel from './BuilderProperties.Panel'
import { motion } from 'framer-motion'
import { useBlock } from '../Builder.context'

const BuilderProperties: React.ForwardRefRenderFunction<
  BuilderPropertiesFunctions,
  BuilderPropertiesProps
> = (props: BuilderPropertiesProps, ref) => {
  const { setup, ...native } = props

  const [block, template] = useBlock()

  useImperativeHandle(ref, () => ({}))

  return (
    <motion.div
      animate={block ? 'open' : 'close'}
      className='w-1/4 bg-slate-50 shadow-xl  border-l border-slate-200 overflow-hidden relative'
    >
      <BuilderPropertiesPanel>
        {template?.fields.map((field, i) => {
          return <BuilderPropertiesInput input={field} key={i} />
        })}
        {/* <div className='font-semibold text-xs text-slate-600 border-b border-t border-slate-200 bg-slate-100 px-4 py-3 -mx-4 '>
          Group
        </div>
        <div>
          <div className='flex flex-col bg-gradient-to-b from-slate-100 to-slate-50  bg-slate-100  -mx-4 border-t  border-slate-200'>
            <div className='py-2 px-4 flex items-center justify-between'>
              <div className='text-xs font-semibold text-slate-600'>Posts:</div>
            </div>
          </div>
          <div className='flex items-center justify-between px-4 space-x-2 -mx-4 px-4 pt-2'>
            <div className='h-px flex-1 bg-slate-300'></div>
            <Button shape='circle' size='xs'>
              <PlusIcon className='w-3 h-3' />
            </Button>
          </div>
        </div> */}
      </BuilderPropertiesPanel>
      {setup}
    </motion.div>
  )
}

export default forwardRef(BuilderProperties)
