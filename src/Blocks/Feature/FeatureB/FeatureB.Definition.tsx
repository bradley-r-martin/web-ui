import FeatureB from './FeatureB'
import { FieldProps } from '../../../Components/field/Field.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureBProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureBProps> {
  return {
    namespace: 'Feature/FeatureB',
    component: FeatureB,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill='var(--solid)'
          d='M0 0h266v150H0z'
        ></path>
        <circle
          cx='56'
          cy='61'
          r='8'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M20 87.5a1.5 1.5 0 011.5-1.5h65a1.5 1.5 0 010 3h-65a1.5 1.5 0 01-1.5-1.5zM27 94.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M43 101.5a1.5 1.5 0 011.5-1.5h20a1.5 1.5 0 010 3h-20a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='25'
          y='77'
          width='58'
          height='4'
          rx='2'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <circle
          cx='135'
          cy='61'
          r='8'
          // fill='var(--main-200)'
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <path
          d='M99 87.5a1.5 1.5 0 011.5-1.5h65a1.5 1.5 0 010 3h-65a1.5 1.5 0 01-1.5-1.5zM106 94.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M122 101.5a1.5 1.5 0 011.5-1.5h20a1.5 1.5 0 010 3h-20a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='104'
          y='77'
          width='58'
          height='4'
          rx='2'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <circle
          cx='214'
          cy='61'
          r='8'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M178 87.5a1.5 1.5 0 011.5-1.5h65a1.5 1.5 0 010 3h-65a1.5 1.5 0 01-1.5-1.5zM185 94.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M201 101.5a1.5 1.5 0 011.5-1.5h20a1.5 1.5 0 010 3h-20a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='183'
          y='77'
          width='58'
          height='4'
          rx='2'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <rect
          x='81'
          y='32'
          width='104.391'
          height='4'
          rx='2'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></rect>
        <rect
          x='96'
          y='21'
          width='74'
          height='5'
          rx='2.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <rect
          x='113'
          y='120'
          width='40'
          height='10'
          rx='2'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></rect>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as FeatureBProps,
  }
}
