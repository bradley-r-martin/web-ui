import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  PhoneIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { BuilderFunctions, BuilderProps } from './Builder.Definition'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import { BuilderRender } from './BuilderRender'
import { Button } from '../../button'
import Conditional from '../../conditional/Conditional'
import Frame from 'react-frame-component'
import { HeroA } from '../../../Blocks/Hero/HeroA'
import { HeroB } from '../../../Blocks/Hero/HeroB'
import { styleMap } from './Builder.Styles'
import { useIO } from '../../../Hooks/useIO/useIO'
import { v4 as uuid } from 'uuid'

const Builder: React.ForwardRefRenderFunction<BuilderFunctions, BuilderProps> = (
  props: BuilderProps,
  ref,
) => {
  const { ...native } = props

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  const [showPicker, setShowPicker] = useState(false)

  const [screen, setScreen] = useState('desktop')

  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    inputRef.current?.focus()
  }
  const handle = useFullScreenHandle()

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isChecked: input })

  const blocks = [HeroA(), HeroB()]

  return (
    <FullScreen handle={handle}>
      <div
        className={`flex flex-col relative h-full min-h-[500px]   bg-white ${classnames.component}`}
      >
        <div className='flex flex-1 overflow-hidden relative'>
          <div
            className='flex flex-1 overflow-hidden relative'
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23cccccc\' fill-opacity=\'0.4\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          >
            <div className='absolute bottom-3 left-3 flex items-center space-x-4  z-20'>
              <div className=' rounded-full bg-white shadow-xl p-1 '>
                <Button shape='circle' intent='primary' onClick={() => setShowPicker(true)}>
                  <PlusIcon className='h-4 w-4' strokeWidth={4} />
                </Button>
              </div>
              <div className='rounded-full flex items-center space-x-1 p-1 bg-white shadow-xl'>
                <div>
                  <Button
                    shape='circle'
                    size='xs'
                    onClick={handle.active ? handle.exit : handle.enter}
                  >
                    <Conditional expression={!handle.active}>
                      <ArrowsPointingOutIcon className='h-4 w-4' />
                    </Conditional>
                    <Conditional expression={handle.active}>
                      <ArrowsPointingInIcon className='h-4 w-4' />
                    </Conditional>
                  </Button>
                </div>
                <div className='px-2'>
                  <div className='w-px bg-slate-500 h-4'></div>
                </div>

                <Button
                  shape='circle'
                  disabled={screen === 'phone'}
                  intent={screen === 'phone' ? 'secondary' : 'default'}
                  size='xs'
                  onClick={() => setScreen('phone')}
                >
                  <DevicePhoneMobileIcon className='h-4 w-4' />
                </Button>
                <Button
                  shape='circle'
                  disabled={screen === 'tablet'}
                  intent={screen === 'tablet' ? 'secondary' : 'default'}
                  size='xs'
                  onClick={() => setScreen('tablet')}
                >
                  <DeviceTabletIcon className='h-4 w-4' />
                </Button>
                <Button
                  shape='circle'
                  disabled={screen === 'desktop'}
                  intent={screen === 'desktop' ? 'secondary' : 'default'}
                  size='xs'
                  onClick={() => setScreen('desktop')}
                >
                  <ComputerDesktopIcon className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <Frame
              className={`mx-auto bg-white shadow-2xl w-full 
              ${screen === 'desktop' ? 'min-w-[1200px]' : ''} ${
                screen === 'tablet' ? 'max-w-4xl' : ''
              }  ${screen === 'phone' ? 'max-w-md' : ''} h-full`}
              initialContent='<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"></script></head><body><div id="mountHere"></div></body></html>'
              mountTarget='#mountHere'
            >
              <div className='flex-1  overflow-auto p-8 '>
                <div className='pb-20 cursor-text' onClick={() => setShowPicker(true)}>
                  <div className='cursor-default' onClick={(e) => e.stopPropagation()}>
                    <BuilderRender blocks={blocks} input={input} output={output} />
                  </div>
                </div>
              </div>
            </Frame>
          </div>
          <div className='w-64 bg-slate-100 p-5 border-l border-slate-200 overflow-auto'></div>
        </div>

        <Conditional expression={showPicker}>
          <div className='absolute inset-0 bg-slate-100 grid grid-cols-4 gap-4 p-4'>
            {blocks?.map((block, i) => {
              return (
                <button
                  key={i}
                  type='button'
                  className='bg-slate-300'
                  onClick={() => {
                    output([...(input ?? []), { id: uuid(), namespace: block.namespace }])
                    setShowPicker(false)
                  }}
                >
                  {block.namespace}
                </button>
              )
            })}
          </div>
        </Conditional>
      </div>
    </FullScreen>
  )
}

export default forwardRef(Builder)
