import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  BuildingLibraryIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  PhoneIcon,
  PlusIcon,
  Square3Stack3DIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { BuilderFunctions, BuilderProps } from './Builder.Definition'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import { BlogA } from '../../../Blocks/Blog/BlogA'
import { BlogB } from '../../../Blocks/Blog/BlogB'
import { BlogC } from '../../../Blocks/Blog/BlogC'
import { BuilderRender } from './BuilderRender'
import BuilderToolbar from './BuilderToolbar/BuilderToolbar'
import { Button } from '../../button'
import Conditional from '../../conditional/Conditional'
import Frame from 'react-frame-component'
import { HeroA } from '../../../Blocks/Hero/HeroA'
import { HeroB } from '../../../Blocks/Hero/HeroB'
import { HeroC } from '../../../Blocks/Hero/HeroC'
import Library from './Library/Library'
import { StepA } from '../../../Blocks/Step/StepA'
import { StepB } from '../../../Blocks/Step/StepB'
import { styleMap } from './Builder.Styles'
import { useCycle } from 'framer-motion'
import { useIO } from '../../../Hooks/useIO/useIO'
import { v4 as uuid } from 'uuid'

const Builder: React.ForwardRefRenderFunction<BuilderFunctions, BuilderProps> = (
  props: BuilderProps,
  ref,
) => {
  const { ...native } = props

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  const [showPicker, setShowPicker] = useState(false)
  const [height, setHeight] = useState<number>(0)

  const [screen, setScreen] = useState<any>('desktop')

  const [scale, setScale] = useState(1)

  const [isOpen, toggleOpen] = useCycle(false, true)

  const inputRef = useRef<HTMLInputElement>(null)

  const iframe = useRef<any>()

  function focus() {
    inputRef.current?.focus()
  }
  const handle = useFullScreenHandle()

  function resize() {
    setHeight(iframe.current?.contentWindow?.document?.body?.scrollHeight)
  }

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isChecked: input })

  const blocks = [HeroA(), HeroB(), HeroC(), BlogA(), BlogB(), BlogC(), StepA(), StepB()]

  console.log(iframe.current?.contentWindow?.document?.body?.scrollHeight)
  return (
    <FullScreen handle={handle}>
      <div
        className={
          'flex flex-col relative  h-full min-h-[500px]   bg-white border border-slate-700'
        }
      >
        <div className='flex flex-1 overflow-hidden relative'>
          <div
            className=' block flex-1 overflow-auto  relative'
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23cccccc\' fill-opacity=\'0.4\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          >
            <Frame
              ref={iframe}
              style={{
                transform: `scale(${scale})`,
              }}
              className={`min-h-full mx-auto bg-white shadow-2xl w-full transition ease-in-out duration-200  ${
                screen === 'desktop' ? 'min-w-[1200px]' : ''
              } ${screen === 'tablet' ? 'max-w-4xl' : ''}  ${
                screen === 'mobile' ? 'max-w-md' : ''
              }  `}
              initialContent='<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"></script></head><body><div id="mountHere"></div></body></html>'
              mountTarget='#mountHere'
              height={height}
              contentDidMount={() => resize()}
              contentDidUpdate={() => resize()}
              scrolling='no'
            >
              <div className='flex-1 bg-white  p-8'>
                <div className='pb-20 cursor-text' onClick={() => setShowPicker(true)}>
                  <div className='cursor-default' onClick={(e) => e.stopPropagation()}>
                    <BuilderRender blocks={blocks} input={input} output={output} />
                  </div>
                </div>
              </div>
            </Frame>
          </div>
          <div className='w-1/4 bg-slate-50 shadow-xl  border-l border-slate-200 overflow-auto'>
            <div className='font-semibold text-xs text-slate-600  px-4 py-3 '>Selected block</div>

            {/* <div className='font-semibold text-xs text-slate-600 border-b border-t border-slate-200 bg-slate-100 px-4 py-3 '>
              Section
            </div> */}
          </div>
        </div>

        <Library {...{ input, output, blocks }} isOpen={isOpen} onClose={() => toggleOpen()} />
        <BuilderToolbar
          screen={screen}
          setScreen={setScreen}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          handle={handle}
          scale={scale}
          setScale={setScale}
        />
        {/* <Conditional expression={!maximum}>
          <div
            onClick={() => setMaximum(true)}
            className='absolute inset-0 z-30 bg-black bg-opacity-50 flex items-center justify-center text-white'
          >
            Open editor
          </div>
        </Conditional> */}
      </div>
    </FullScreen>
  )
}

export default forwardRef(Builder)
