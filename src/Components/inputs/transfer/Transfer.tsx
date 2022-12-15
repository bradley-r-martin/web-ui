import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
} from '@heroicons/react/24/outline'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { TransferFunctions, TransferProps } from './Transfer.Definition'

import { Button } from '../../button'
import Conditional from '../../conditional/Conditional'
import { styleMap } from './Transfer.Styles'
import { useDisabled } from '../../../Hooks/useDisabled/useDisabled'
import { useIO } from '../../../Hooks/useIO/useIO'

const Transfer: React.ForwardRefRenderFunction<TransferFunctions, TransferProps> = (
  props: TransferProps,
  ref,
) => {
  const { ...native } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const { isDisabled } = useDisabled()

  function focus() {
    inputRef.current?.focus()
  }

  const options = props?.options ?? []

  const [filter, setFilter] = useState('')

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  function add(id: string) {
    output([...(input ?? []).filter((s: string) => s !== id), id])
  }
  function remove(id: string) {
    output([...(input ?? []).filter((s: string) => s !== id)])
  }

  function search(find: string) {
    return options.filter((obj) =>
      Object.keys(obj).some((key) => `${obj[key]}`.toLowerCase().includes(find.toLowerCase())),
    )
  }

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isDisabled })

  const selected = input ?? []

  return (
    <div className={classnames.input}>
      <div className='bg-slate-50 border-b border-slate-200'>
        <div className='w-1/2 p-2'>
          <div className='sticky top-0 z-30 flex items-center space-x-1 bg-white rounded-full px-2 py-1 shadow-inner border border-slate-200 focus-within:border-slate-500'>
            <MagnifyingGlassIcon className='h-3 w-3 flex-shrink-0' />
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className='flex-1 outline-none text-xs'
            />
          </div>
        </div>
      </div>
      <div className='flex items-stretch overflow-hidden flex-1'>
        <div className='flex-1 p-2 flex flex-col space-y-2 overflow-auto'>
          {search(filter)
            .filter((option) => !selected.includes(option.id))
            .map((option) => {
              return (
                <button
                  type='button'
                  key={option.id}
                  onClick={() => {
                    add(option.id)
                  }}
                  className='bg-slate-50 px-2 py-1 hover:bg-sky-100 active:bg-sky-500 active:text-white active:scale-95 transition ease-in-out duration-100 rounded flex'
                >
                  {props?.item ? props.item(option) : option.text}
                </button>
              )
            })}
        </div>
        <div className='flex  flex-col justify-center relative'>
          <div className='py-1.5 px-1 bg-slate-100 rounded-full space-y-1 shadow-inner flex flex-col justify-center relative z-10'>
            <span>
              <Button
                shape='circle'
                size='xs'
                disabled={(input ?? []).length === options.length}
                onClick={() => output([...options.map(({ id }) => id)])}
              >
                <ChevronRightIcon className='h-3 w-3' />
              </Button>
            </span>
            <span>
              <Button
                shape='circle'
                size='xs'
                disabled={(input ?? []).length === 0}
                onClick={() => output([])}
              >
                <ChevronLeftIcon className='h-3 w-3' />
              </Button>
            </span>
          </div>
          <div className='bg-slate-300 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px'></div>
        </div>
        <div className='flex-1 p-2 flex flex-col space-y-2 overflow-auto'>
          {search(filter)
            .filter((option) => selected.includes(option.id))
            .map((option) => {
              return (
                <div key={option.id} className='flex items-center justify-between space-x-2'>
                  <button
                    type='button'
                    onClick={() => remove(option.id)}
                    className='bg-slate-50 px-2 py-1 hover:bg-sky-100 active:bg-sky-500 active:text-white active:scale-95 transition ease-in-out duration-100 rounded flex flex-1 items-center justify-between'
                  >
                    {props?.item ? props.item(option) : option.text}
                  </button>
                  <button type='button' className='cursor-move'>
                    <QueueListIcon className='h-4 w-4' />
                  </button>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Transfer)
