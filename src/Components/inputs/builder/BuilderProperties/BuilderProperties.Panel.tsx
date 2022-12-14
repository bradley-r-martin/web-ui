import React, { FunctionComponent } from 'react'
import useBuilder, { useBlock } from '../Builder.context'

import { Button } from '../../../button'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface BuilderPropertiesPanelProps {
  children: React.ReactNode
}

const overlay = {
  open: {
    opacity: 1,
    display: 'block',
    transition: {
      type: 'tween',
      damping: 10,
      stiffness: 10,
    },
  },
  close: {
    opacity: 0,
    transition: {
      type: 'tween',
      damping: 10,
      stiffness: 10,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

const panel = {
  open: {
    y: '0%',
    display: 'block',
    transition: {
      type: 'tween',
      damping: 10,
      stiffness: 10,
    },
  },
  close: {
    y: '100%',
    transition: {
      type: 'tween',
      damping: 10,
      stiffness: 10,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

const BuilderPropertiesPanel: FunctionComponent<BuilderPropertiesPanelProps> = (props) => {
  const { children } = props

  const [, setSelected] = useBuilder().selected
  const [, template] = useBlock()

  const group = template?.namespace.split('/')[0] ?? ''
  const name = template?.namespace.split('/')[1] ?? ''

  return (
    <>
      <motion.div
        initial={false}
        variants={overlay}
        className='bg-slate-300 bg-opacity-40 backdrop-blur-sm absolute inset-0 z-10 overflow-hidden'
      ></motion.div>
      <motion.div
        variants={panel}
        initial={false}
        className='bg-slate-50 rounded-t-xl shadow-xl absolute top-20 left-0 right-0 bottom-0 p-4 z-30'
      >
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
        <div className='space-y-2'>{children}</div>
      </motion.div>
    </>
  )
}

export default BuilderPropertiesPanel
