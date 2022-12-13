import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { BuilderToolbarFunctions, BuilderToolbarProps } from './BuilderToolbar.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import { Button } from '../../../button'
import Conditional from '../../../conditional/Conditional'
import useBuilder from '../Builder.context'

const BuilderToolbar: React.ForwardRefRenderFunction<
  BuilderToolbarFunctions,
  BuilderToolbarProps
> = (props: BuilderToolbarProps, ref) => {
  const { handle, ...native } = props

  const [screen, setScreen] = useBuilder().screen
  const [library, setLibrary] = useBuilder().library

  const [scale, setScale] = useBuilder().scale

  useImperativeHandle(ref, () => ({}))

  return (
    <div className='absolute bottom-3 left-3 flex items-center space-x-4  '>
      <div className=' rounded-full bg-white shadow-xl p-1  z-30'>
        <Button
          shape='circle'
          intent={library ? 'secondary' : 'primary'}
          onClick={() => setLibrary(!library)}
        >
          <PlusIcon
            className={`h-4 w-4 transition ease-in-out duration-100 ${library ? 'rotate-45' : ''}`}
            strokeWidth={4}
          />
        </Button>
      </div>
      <div className='rounded-full flex items-center space-x-1 p-1 bg-white shadow-xl'>
        <div className=''>
          <Button shape='circle' size='xs' onClick={handle.active ? handle.exit : handle.enter}>
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
          disabled={scale === 1}
          shape='circle'
          intent='default'
          size='xs'
          onClick={() => setScale(scale + 0.1)}
        >
          <PlusIcon className='h-4 w-4' />
        </Button>
        <Button
          disabled={scale <= 0.6}
          shape='circle'
          intent='default'
          size='xs'
          onClick={() => setScale(scale - 0.1)}
        >
          <MinusIcon className='h-4 w-4' />
        </Button>
      </div>
      <div className='rounded-full flex items-center space-x-1 p-1 bg-white shadow-xl'>
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
  )
}

export default forwardRef(BuilderToolbar)
