import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { BuilderRenderFunctions, BuilderRenderProps } from './BuilderRender.Definition'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import BuilderRenderItem from './BuilderRender.Item'
import { Button } from '../../../button'
import { Reorder } from 'framer-motion'
import { useIO } from '../../../../Hooks/useIO/useIO'

const BuilderRender: React.ForwardRefRenderFunction<BuilderRenderFunctions, BuilderRenderProps> = (
  props: BuilderRenderProps,
  ref,
) => {
  const { input, output, blocks, ...native } = props
  const [selected, setSelected] = useState<null | string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    inputRef.current?.focus()
  }

  function move(id: string, direction: 'up' | 'down') {
    // move up
    const from = (input ?? []).findIndex((b) => b.id === id)
    const to = direction === 'up' ? from - 1 : from + 1
    const reorder = [...(input ?? [])]

    console.log(from, to, reorder)
    const f = reorder.splice(from, 1)[0]
    reorder.splice(to, 0, f)
    if (output) {
      output(reorder)
    }
  }

  function remove(id: string) {
    // remove
    if (output) {
      output([...(input ?? []).filter((b) => b.id !== id)])
    }
  }

  function select(id: string) {
    setSelected(id)
  }

  useImperativeHandle(ref, () => ({ focus }))

  return (
    <div className='flex flex-col'>
      <Reorder.Group axis='y' values={input ?? []} onReorder={output ?? (() => undefined)}>
        {(input ?? []).map((b, i) => {
          return (
            <BuilderRenderItem
              key={b.id}
              move={move}
              remove={remove}
              select={select}
              item={b}
              blocks={blocks}
              isSelected={selected === b.id}
            />
          )
        })}
      </Reorder.Group>
    </div>
  )
}

export default forwardRef(BuilderRender)
