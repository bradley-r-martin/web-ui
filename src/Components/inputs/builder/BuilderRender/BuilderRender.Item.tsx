import {
  ChevronDownIcon,
  ChevronUpIcon,
  QueueListIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import React, { FunctionComponent, useEffect } from 'react'
import { Reorder, motion, useDragControls, useMotionValue } from 'framer-motion'

import { BuilderIO } from '../Builder.Definition'
import { Button } from '../../../button'
import Conditional from '../../../conditional/Conditional'
import { HasBlocks } from '../../../../Traits/HasBlocks'
import { useRaisedShadow } from '../../../../Hooks/useRaisedShadow/useRaisedShadow'

interface BuilderRenderItemProps extends HasBlocks {
  select: (id: string) => void
  remove: (id: string) => void
  move: (id: string, direction: 'up' | 'down') => void
  item: { id: string; namespace: string }
  isSelected: boolean
}

const BuilderRenderItem: FunctionComponent<BuilderRenderItemProps> = (props) => {
  const { remove, move, select, blocks, item, isSelected } = props
  const block = blocks?.find(({ namespace }) => namespace === item.namespace)

  const Component = block?.component ?? (() => <></>)
  const controls = useDragControls()

  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      style={{ boxShadow, y, marginBottom: isSelected ? 20 : 0, marginTop: isSelected ? 20 : 0 }}
      onClick={() => select(item.id)}
      className={`p-3  rounded  ${
        isSelected ? 'border border-slate-500 bg-white relative' : 'border border-transparent'
      }`}
    >
      <Conditional expression={isSelected}>
        <div className='flex flex-col absolute top-3 transform translate-x-1/2 right-0 space-y-2 '>
          <div className='p-1 shadow-xl rounded-full bg-white'>
            <Button
              variant='transparent'
              intent='secondary'
              shape='circle'
              size='xs'
              type='button'
              onClick={() => remove(item.id)}
            >
              <XMarkIcon className='h-4 w-4' />
            </Button>
          </div>
          <div className='flex flex-col space-y-2 p-1 shadow-xl bg-white rounded-full group'>
            <div className='p-1 cursor-move' onPointerDown={(e) => controls.start(e)}>
              <QueueListIcon className='h-4 w-4' />
            </div>
            <div className='flex flex-col space-y-2 '>
              <Button shape='circle' size='xs' type='button' onClick={() => move(item.id, 'up')}>
                <ChevronUpIcon className='h-4 w-4' />
              </Button>
              <Button shape='circle' size='xs' type='button' onClick={() => move(item.id, 'down')}>
                <ChevronDownIcon className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </Conditional>
      <div className='pointer-events-none select-none'>
        {block ? <Component {...(block?.data as any)} /> : <>Component not found</>}
      </div>
    </Reorder.Item>
  )
}

export default BuilderRenderItem
