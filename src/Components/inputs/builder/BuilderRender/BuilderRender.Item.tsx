import {
  ChevronDownIcon,
  ChevronUpIcon,
  QueueListIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import React, { FunctionComponent, useRef, useState } from 'react'
import { Reorder, useDragControls, useMotionValue } from 'framer-motion'

import { Button } from '../../../button'
import Conditional from '../../../conditional/Conditional'
import Frame from 'react-frame-component'
import { HasBlocks } from '../../../../Traits/HasBlocks'
import useBuilder from '../Builder.context'
import { useRaisedShadow } from '../../../../Hooks/useRaisedShadow/useRaisedShadow'

interface BuilderRenderItemProps extends HasBlocks {
  remove: (id: string) => void
  move: (id: string, direction: 'up' | 'down') => void
  item: { id: string; namespace: string; data: { [key: string]: any } }
}

const BuilderRenderItem: FunctionComponent<BuilderRenderItemProps> = (props) => {
  const { remove, move, blocks, item } = props
  const block = blocks?.find(({ namespace }) => namespace === item.namespace)

  const [selected, setSelected] = useBuilder().selected

  const head = useBuilder().head

  const Component = block?.component ?? (() => <></>)
  const controls = useDragControls()

  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)

  const [height, setHeight] = useState<number>(0)
  const iframe = useRef<any>()

  function resize() {
    setHeight(iframe.current?.contentWindow?.document?.body?.scrollHeight)
  }

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      style={{
        boxShadow,
        y,
        marginBottom: selected === item.id ? 20 : 0,
        marginTop: selected === item.id ? 20 : 0,
      }}
      onClick={() => setSelected(item.id)}
      className={`p-3  rounded  ${
        selected === item.id
          ? 'border border-dotted border-slate-500 bg-white relative'
          : 'border border-transparent'
      }`}
    >
      <Conditional expression={selected === item.id}>
        <div className='flex flex-col absolute top-3 transform translate-x-1/2 right-0 space-y-2 '>
          <div className='p-1 shadow-xl rounded-full bg-white'>
            <Button
              variant='transparent'
              intent='secondary'
              shape='circle'
              size='xs'
              type='button'
              onClick={() => {
                remove(item.id)
                setSelected('')
              }}
            >
              <TrashIcon className='h-4 w-4' />
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
        <Frame
          ref={iframe}
          className='min-h-full w-full'
          initialContent={`<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"></script>${head}</head><body><div id="mountHere"></div></body></html>`}
          mountTarget='#mountHere'
          height={height}
          contentDidMount={() => resize()}
          contentDidUpdate={() => resize()}
          scrolling='no'
        >
          {block ? <Component {...(item?.data as any)} /> : <>Component not found</>}
        </Frame>
      </div>
    </Reorder.Item>
  )
}

export default BuilderRenderItem
