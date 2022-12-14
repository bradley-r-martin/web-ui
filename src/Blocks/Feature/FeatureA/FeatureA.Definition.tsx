import FeatureA from './FeatureA'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureAProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureAProps> {
  return {
    namespace: 'Feature/FeatureA',
    component: FeatureA,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill='var(--solid)'
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='96'
          y='39'
          width='74'
          height='5'
          rx='2.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <circle
          cx='26'
          cy='90'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <rect
          x='82'
          y='48'
          width='102'
          height='5'
          rx='2.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M38 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM38 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M38 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='38'
          y='84'
          width='43'
          height='4'
          rx='2'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <circle
          cx='105'
          cy='90'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M117 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM117 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M117 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='117'
          y='84'
          width='43'
          height='4'
          rx='2'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <circle
          cx='184'
          cy='90'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M196 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM196 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M196 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='196'
          y='84'
          width='43'
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
    } as FeatureAProps,
  }
}
