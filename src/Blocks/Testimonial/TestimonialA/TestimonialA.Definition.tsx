import { FieldProps } from '../../../Components/field/Field.Definition'
import React from 'react'
import TestimonialA from './TestimonialA'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestimonialAProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<TestimonialAProps> {
  return {
    namespace: 'Testimonial/TestimonialA',
    component: TestimonialA,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M139.282 32h-4.365a.708.708 0 00-.718.697v4.239c0 .385.322.697.718.697h2.089c-.027 1.11-.293 1.998-.795 2.666-.396.527-.997.963-1.799 1.308a.687.687 0 00-.356.935l.517 1.06c.166.34.578.49.934.34.951-.398 1.753-.903 2.408-1.517.798-.748 1.346-1.593 1.641-2.536.296-.943.444-2.228.444-3.86v-3.332a.708.708 0 00-.718-.697zM127.523 43.94c.939-.398 1.737-.903 2.396-1.515.805-.748 1.355-1.59 1.651-2.526.296-.936.444-2.226.444-3.87v-3.332a.708.708 0 00-.718-.697h-4.365a.708.708 0 00-.718.697v4.239c0 .385.322.697.718.697h2.089c-.027 1.11-.293 1.998-.795 2.666-.397.527-.997.963-1.799 1.308a.689.689 0 00-.357.935l.516 1.057c.166.34.581.491.938.34z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <rect
          x='95'
          y='58'
          width='76'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='123'
          y='94'
          width='20'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></rect>
        <rect
          x='89'
          y='66'
          width='88'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='92'
          y='74'
          width='83'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='103'
          y='82'
          width='60'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='113'
          y='104'
          width='40'
          height='4'
          rx='2'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='106'
          y='112'
          width='54'
          height='4'
          rx='2'
          // fill="var(--base-400)"
          className='text-slate-400'
          fill='currentColor'
        ></rect>
      </svg>
    ),

    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as TestimonialAProps,
  }
}
