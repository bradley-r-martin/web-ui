import FeatureC from './FeatureC'
import { FieldProps } from '../../../Components/field/Field.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureCProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureCProps> {
  return {
    namespace: 'Feature/FeatureC',
    component: FeatureC,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill='var(--solid)'
          d='M0 0h266v150H0z'
        ></path>
        <circle
          cx='140'
          cy='26'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M134 44a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M134 49a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='134'
          y='37'
          width='58'
          height='3'
          rx='1.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <circle
          cx='140'
          cy='66'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M134 84a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M134 89a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='134'
          y='77'
          width='58'
          height='3'
          rx='1.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <circle
          cx='140'
          cy='106'
          r='6'
          // fill='var(--main-200)'
          fill='currentColor'
          className='text-sky-200'
        ></circle>
        <path
          d='M134 124a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M134 129a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='134'
          y='117'
          width='58'
          height='3'
          rx='1.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M63.792 92h26.544a3.785 3.785 0 003.792-3.778V61.778A3.785 3.785 0 0090.336 58H63.792A3.785 3.785 0 0060 61.778v26.444A3.785 3.785 0 0063.792 92zm0 0l20.856-20.778 9.48 9.445M73.272 68.389a2.839 2.839 0 01-2.844 2.833 2.839 2.839 0 01-2.844-2.833 2.839 2.839 0 012.844-2.833 2.839 2.839 0 012.844 2.833z'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as FeatureCProps,
  }
}
