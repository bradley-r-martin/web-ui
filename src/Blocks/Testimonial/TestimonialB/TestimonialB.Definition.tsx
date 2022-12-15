import { FieldProps } from '../../../Components/field/Field.Definition'
import React from 'react'
import TestimonialB from './TestimonialB'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestimonialBProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<TestimonialBProps> {
  return {
    namespace: 'Testimonial/TestimonialB',
    component: TestimonialB,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M21 77a2 2 0 012-2h59a2 2 0 110 4H23a2 2 0 01-2-2zM26 85a2 2 0 012-2h48.92a2 2 0 110 4H28a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M38 104a2 2 0 012-2h25a2 2 0 110 4H40a2 2 0 01-2-2z'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M26 69a2 2 0 012-2h48.92a2 2 0 110 4H28a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M44 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H45.5a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <circle
          cx='53'
          cy='53'
          r='8'
          // fill="var(--base-300)"
          className='text-slate-300'
          fill='currentColor'
        ></circle>
        <path
          d='M102 77a2 2 0 012-2h59a2 2 0 110 4h-59a2 2 0 01-2-2zM107 85a2 2 0 012-2h48.92a2 2 0 110 4H109a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M119 104a2 2 0 012-2h25a2 2 0 110 4h-25a2 2 0 01-2-2z'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M107 69a2 2 0 012-2h48.92a2 2 0 110 4H109a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M125 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H126.5a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <circle
          cx='134'
          cy='53'
          r='8'
          // fill="var(--base-300)"
          className='text-slate-300'
          fill='currentColor'
        ></circle>
        <path
          d='M183 77a2 2 0 012-2h59a2 2 0 110 4h-59a2 2 0 01-2-2zM188 85a2 2 0 012-2h48.92a2 2 0 110 4H190a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M200 104a2 2 0 012-2h25a2 2 0 110 4h-25a2 2 0 01-2-2z'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M188 69a2 2 0 012-2h48.92a2 2 0 110 4H190a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M206 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H207.5a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <circle
          cx='215'
          cy='53'
          r='8'
          // fill="var(--base-300)"
          className='text-slate-300'
          fill='currentColor'
        ></circle>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as TestimonialBProps,
  }
}
