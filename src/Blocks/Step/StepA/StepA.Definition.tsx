import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import StepA from './StepA'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StepAProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<StepAProps> {
  return {
    namespace: 'Step/StepA',
    component: StepA,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M24 28.5a.5.5 0 011 0v94a.5.5 0 01-1 0v-94z'
          // fill="var(--base-400)"
          fill='currentColor'
          className='text-slate-400'
        ></path>
        <path
          d='M29 30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z'
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-blue-500'
        ></path>
        <path
          d='M34 35a1 1 0 011-1h54a1 1 0 110 2H35a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <rect
          x='34'
          y='28'
          width='35'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M29 52.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z'
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-sky-400'
        ></path>
        <path
          d='M34 57a1 1 0 011-1h54a1 1 0 110 2H35a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <rect
          x='34'
          y='50'
          width='35'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M29 74.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z'
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-blue-500'
        ></path>
        <path
          d='M34 79a1 1 0 011-1h54a1 1 0 110 2H35a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <rect
          x='34'
          y='72'
          width='35'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M29 96.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z'
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-blue-500'
        ></path>
        <path
          d='M34 101a1 1 0 011-1h54a1 1 0 010 2H35a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <rect
          x='34'
          y='94'
          width='35'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M29 118.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z'
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-blue-500'
        ></path>
        <path
          d='M34 123a1 1 0 011-1h54a1 1 0 010 2H35a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <rect
          x='34'
          y='116'
          width='35'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M175.792 89h26.544a3.785 3.785 0 003.792-3.778V58.778A3.785 3.785 0 00202.336 55h-26.544A3.785 3.785 0 00172 58.778v26.444A3.785 3.785 0 00175.792 89zm0 0l20.856-20.778 9.48 9.445m-20.856-12.278a2.838 2.838 0 01-2.844 2.833 2.838 2.838 0 01-2.844-2.833 2.838 2.838 0 012.844-2.833 2.838 2.838 0 012.844 2.833z'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    ),
    fields: [
      { type: 'textbox', name: 'title', label: 'Title:' } as FieldProps,
      { type: 'image', name: 'image', label: 'Image:' } as FieldProps,
    ],
    data: {
      title: 'test Title',
      image: {
        url: 'test-url',
      },
    } as StepAProps,
  }
}
