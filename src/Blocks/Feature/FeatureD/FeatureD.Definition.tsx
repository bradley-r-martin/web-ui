import FeatureD from './FeatureD'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureDProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureDProps> {
  return {
    namespace: 'Feature/FeatureD',
    component: FeatureD,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill='var(--solid)'
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='20.5'
          y='54.5'
          width='107'
          height='41'
          rx='1.5'
          // fill='var(--solid)'
          stroke='currentColor'
        ></rect>
        <circle
          cx='32'
          cy='68'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M44 72.5a1.5 1.5 0 011.5-1.5h68a1.5 1.5 0 010 3h-68a1.5 1.5 0 01-1.5-1.5zM44 79.5a1.5 1.5 0 011.5-1.5h54a1.5 1.5 0 010 3h-54a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M44 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='44'
          y='62'
          width='32'
          height='4'
          rx='2'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <rect
          x='138.5'
          y='54.5'
          width='107'
          height='41'
          rx='1.5'
          // fill='var(--solid)'
          stroke='currentColor'
        ></rect>
        <circle
          cx='150'
          cy='68'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M162 72.5a1.5 1.5 0 011.5-1.5h68a1.5 1.5 0 010 3h-68a1.5 1.5 0 01-1.5-1.5zM162 79.5a1.5 1.5 0 011.5-1.5h54a1.5 1.5 0 010 3h-54a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M162 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='162'
          y='62'
          width='32'
          height='4'
          rx='2'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as FeatureDProps,
  }
}
