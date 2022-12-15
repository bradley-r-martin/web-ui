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
import { ContentA } from '../../../Blocks/Content/ContentA'
import { ContentB } from '../../../Blocks/Content/ContentB'
import { ContentC } from '../../../Blocks/Content/ContentC'
import { ContentD } from '../../../Blocks/Content/ContentD'
import { ContentE } from '../../../Blocks/Content/ContentE'
import { ContentF } from '../../../Blocks/Content/ContentF'
import { CtaA } from '../../../Blocks/Cta/CtaA'
import { CtaB } from '../../../Blocks/Cta/CtaB'
import { FeatureA } from '../../../Blocks/Feature/FeatureA'
import { FeatureB } from '../../../Blocks/Feature/FeatureB'
import { FeatureC } from '../../../Blocks/Feature/FeatureC'
import { FeatureD } from '../../../Blocks/Feature/FeatureD'
import { FeatureE } from '../../../Blocks/Feature/FeatureE'
import { FeatureF } from '../../../Blocks/Feature/FeatureF'
import { FeatureG } from '../../../Blocks/Feature/FeatureG'
import { FeatureH } from '../../../Blocks/Feature/FeatureH'
import { GalleryA } from '../../../Blocks/Gallery/GalleryA'
import { GalleryB } from '../../../Blocks/Gallery/GalleryB'
import { GalleryC } from '../../../Blocks/Gallery/GalleryC'
import { HeroA } from '../../../Blocks/Hero/HeroA'
import { HeroB } from '../../../Blocks/Hero/HeroB'
import { HeroC } from '../../../Blocks/Hero/HeroC'
import Library from './BuilderLibrary/BuilderLibrary'
import { StatisticA } from '../../../Blocks/Statistic/StatisticA'
import { StatisticB } from '../../../Blocks/Statistic/StatisticB'
import { StepA } from '../../../Blocks/Step/StepA'
import { StepB } from '../../../Blocks/Step/StepB'
import { TeamA } from '../../../Blocks/Team/TeamA'
import { TeamB } from '../../../Blocks/Team/TeamB'
import { TestimonialA } from '../../../Blocks/Testimonial/TestimonialA'
import { TestimonialB } from '../../../Blocks/Testimonial/TestimonialB'
import { styleMap } from './Builder.Styles'
import { useIO } from '../../../Hooks/useIO/useIO'

const Builder: React.ForwardRefRenderFunction<BuilderFunctions, BuilderProps> = (
  props: BuilderProps,
  ref,
) => {
  const { setup, ...native } = props

  const screen = useState<Screen>('desktop')

  const library = useState<boolean>(false)
  const scale = useState<number>(0.9)
  const selected = useState<string>('')

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    inputRef.current?.focus()
  }
  const handle = useFullScreenHandle()

  useImperativeHandle(ref, () => ({ focus }))

  const classnames = styleMap({ ...props, isChecked: input })

  const blocks = [
    HeroA(),
    HeroB(),
    HeroC(),
    BlogA(),
    BlogB(),
    BlogC(),
    CtaA(),
    CtaB(),
    ContentA(),
    ContentB(),
    ContentC(),
    ContentD(),
    ContentE(),
    ContentF(),
    StepA(),
    StepB(),
    FeatureA(),
    FeatureB(),
    FeatureC(),
    FeatureD(),
    FeatureE(),
    FeatureF(),
    FeatureG(),
    FeatureH(),
    GalleryA(),
    GalleryB(),
    GalleryC(),
    StatisticA(),
    StatisticB(),
    TeamA(),
    TeamB(),
    TestimonialA(),
    TestimonialB(),
  ]

  return (
    <BuilderContext.Provider
      value={{
        screen,
        library,
        scale,
        selected,
        blocks: [input, output],
        templates: blocks,
      }}
    >
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
                className={`min-h-full mx-auto bg-white flex shadow-2xl w-full transition ease-in-out duration-200  ${
                  screen[0] === 'desktop' ? 'min-w-[1000px]' : ''
                } ${screen[0] === 'tablet' ? 'max-w-4xl' : ''}  ${
                  screen[0] === 'phone' ? 'max-w-md' : ''
                }  `}
              >
                <div className='flex-1 bg-white flex p-8'>
                  <div className='w-full'>
                    <div className='cursor-default  w-full ' onClick={(e) => e.stopPropagation()}>
                      <BuilderRender blocks={blocks} input={input} output={output} />
                    </div>
                    <button
                      type='button'
                      className='cursor-text flex w-full min-h-[100px] rounded text-white items-center justify-center hover:bg-sky-50 hover:text-sky-400 mb-20'
                      onClick={() => library[1](true)}
                    >
                      Click to add block
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <BuilderProperties setup={setup} />
          </div>
          <Library />
          <BuilderToolbar handle={handle} />
        </div>
      </FullScreen>
    </BuilderContext.Provider>
  )
}

export default forwardRef(Builder)
