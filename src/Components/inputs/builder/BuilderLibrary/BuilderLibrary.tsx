import { BuilderLibraryFunctions, BuilderLibraryProps } from './BuilderLibrary.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import BuilderLibraryGroup from './BuilderLibrary.Group'
import BuilderLibraryTitle from './BuilderLibrary.Title'
import _ from 'lodash'
import { motion } from 'framer-motion'
import useBuilder from '../Builder.context'
import { v4 as uuid } from 'uuid'

const BuilderLibrary: React.ForwardRefRenderFunction<
  BuilderLibraryFunctions,
  BuilderLibraryProps
> = (props: BuilderLibraryProps, ref) => {
  const { input, output, blocks, ...native } = props

  const [library, setBuilderLibrary] = useBuilder().library

  function add(block: any) {
    if (output) {
      output([...(input ?? []), { id: uuid(), namespace: block.namespace }])
    }
    setBuilderLibrary(false)
  }

  useImperativeHandle(ref, () => ({}))

  const variants = {
    open: {
      opacity: 1,
      display: 'flex',
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
        delay: 0,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  const groups = _.groupBy(blocks, ({ namespace }) => namespace.split('/')[0])

  return (
    <motion.div
      animate={library ? 'open' : 'closed'}
      initial={false}
      variants={variants}
      className='absolute inset-0 backdrop-blur-md bg-white/30 z-20 p-3  flex flex-col overflow-hidden'
    >
      <BuilderLibraryTitle />
      <motion.div
        variants={{
          open: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0,
              delay: 0,
              type: 'spring',
            },
          },
          closed: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0,
              delay: 0,
              type: 'spring',
            },
          },
        }}
        className='flex-1 flex flex-col overflow-auto space-y-5 mx-14 px-5 py-10 border-t border-black border-opacity-10'
      >
        {Object.keys(groups).map((group) => {
          return (
            <BuilderLibraryGroup key={group} name={group}>
              {groups[group]?.map((block, i) => {
                return (
                  <button
                    key={i}
                    type='button'
                    className='text-xs text-slate-600 w-full bg-white rounded flex flex-col items-center justify-center transition-all ease-in-out duration-100 border border-transparent shadow hover:shadow-2xl active:scale-95'
                    onClick={() => add(block)}
                  >
                    <div className='h-32 flex items-center justify-center'>{block.icon}</div>
                    <div className='p-5'>{block.namespace}</div>
                  </button>
                )
              })}
            </BuilderLibraryGroup>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default forwardRef(BuilderLibrary)
