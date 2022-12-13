import { BuilderFunctions, BuilderProps, Screen } from './Builder.Definition'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import { BlogA } from '../../../Blocks/Blog/BlogA'
import { BlogB } from '../../../Blocks/Blog/BlogB'
import { BlogC } from '../../../Blocks/Blog/BlogC'
import { BuilderContext } from './Builder.context'
import BuilderProperties from './BuilderProperties/BuilderProperties'
import { BuilderRender } from './BuilderRender'
import BuilderToolbar from './BuilderToolbar/BuilderToolbar'
import { HeroA } from '../../../Blocks/Hero/HeroA'
import { HeroB } from '../../../Blocks/Hero/HeroB'
import { HeroC } from '../../../Blocks/Hero/HeroC'
import Library from './BuilderLibrary/BuilderLibrary'
import { StepA } from '../../../Blocks/Step/StepA'
import { StepB } from '../../../Blocks/Step/StepB'
import { styleMap } from './Builder.Styles'
import { useIO } from '../../../Hooks/useIO/useIO'

const Builder: React.ForwardRefRenderFunction<BuilderFunctions, BuilderProps> = (
  props: BuilderProps,
  ref,
) => {
  const { setup, ...native } = props

  const screen = useState<Screen>('desktop')

  const library = useState<boolean>(false)
  const scale = useState<number>(1)
  const selected = useState<string>('')

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    inputRef.current?.focus()
  }
  const handle = useFullScreenHandle()

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isChecked: input })

  const blocks = [HeroA(), HeroB(), HeroC(), BlogA(), BlogB(), BlogC(), StepA(), StepB()]

  return (
    <BuilderContext.Provider value={{ screen, library, scale, selected }}>
      <FullScreen handle={handle} className='flex flex-1 w-full'>
        <div
          className={
            'flex w-full overflow-hidden flex-col relative  h-full min-h-[500px]   bg-white border border-slate-700'
          }
        >
          <div className='flex flex-1 overflow-hidden relative'>
            <div
              className=' block flex-1 overflow-auto  relative'
              style={{
                backgroundImage: atob(
                  'dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCcgaGVpZ2h0PScxMDAnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzY2NjY2NjJyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NwYXRoIG9wYWNpdHk9Jy41JyBkPSdNOTYgOTVoNHYxaC00djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OXptLTEgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptOS0xMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptOS0xMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptOS0xMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXonLyUzRSUzQ3BhdGggZD0nTTYgNVYwSDV2NUgwdjFoNXY5NGgxVjZoOTRWNUg2eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0UiKQ==',
                ),
              }}
            >
              <div
                style={{
                  transform: `scale(${scale[0]})`,
                }}
                className={`min-h-full mx-auto bg-white shadow-2xl w-full transition ease-in-out duration-200  ${
                  screen[0] === 'desktop' ? 'min-w-[1000px]' : ''
                } ${screen[0] === 'tablet' ? 'max-w-4xl' : ''}  ${
                  screen[0] === 'phone' ? 'max-w-md' : ''
                }  `}
              >
                <div className='flex-1 bg-white  p-8'>
                  <div
                    className='pb-20 cursor-text'
                    // onClick={() => library[0](true)}
                  >
                    <div className='cursor-default' onClick={(e) => e.stopPropagation()}>
                      <BuilderRender blocks={blocks} input={input} output={output} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BuilderProperties setup={setup} {...{ input, output, blocks }} />
          </div>
          <Library {...{ input, output, blocks }} />
          <BuilderToolbar handle={handle} />
        </div>
      </FullScreen>
    </BuilderContext.Provider>
  )
}

export default forwardRef(Builder)
