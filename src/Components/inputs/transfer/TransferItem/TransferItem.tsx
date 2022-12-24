import React, { forwardRef, useImperativeHandle } from 'react'
import { Reorder, useDragControls, useMotionValue } from 'framer-motion'
import { TransferItemFunctions, TransferItemProps } from './TransferItem.Definition'

import { Button } from '../../../button'
import Conditional from '../../../conditional/Conditional'
import { QueueListIcon } from '@heroicons/react/24/outline'
import { useRaisedShadow } from '../../../../Hooks/useRaisedShadow/useRaisedShadow'

const TransferItem: React.ForwardRefRenderFunction<TransferItemFunctions, TransferItemProps> = (
  props: TransferItemProps,
  ref,
) => {
  const { option, remove, item, reorderable, ...native } = props

  useImperativeHandle(ref, () => ({}))

  const controls = useDragControls()

  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)

  return (
    <Reorder.Item
      value={option.id}
      dragListener={false}
      dragControls={controls}
      style={{
        boxShadow,
        y,
      }}
      key={option.id}
      className='cursor-pointer bg-slate-50 px-2 py-1 hover:bg-sky-100 active:bg-sky-500 active:text-white active:scale-95 rounded flex items-center justify-between'
      onClick={() => remove(option.id)}
    >
      <div className='flex items-center justify-between space-x-2 flex-1'>
        {props?.item ? props.item(option) : option.text}

        <Conditional expression={!!reorderable}>
          <Button
            shape='circle'
            size='xs'
            variant='transparent'
            className='cursor-move'
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => {
              e.stopPropagation()
              controls.start(e)
            }}
          >
            <QueueListIcon className='h-4 w-4' />
          </Button>
        </Conditional>
      </div>
    </Reorder.Item>
  )
}

export default forwardRef(TransferItem)
