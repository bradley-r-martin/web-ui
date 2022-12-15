import ContentE from './ContentE'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContentEProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<ContentEProps> {
  return {
    namespace: 'Content/ContentE',
    component: ContentE,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M93 67.5a.5.5 0 011 0v62a.5.5 0 01-1 0v-62z'
          // fill="var(--base-400)"
          className='text-slate-400'
          fill='currentColor'
        ></path>
        <path
          d='M106 83a2 2 0 012-2h103.337a2 2 0 110 4H108a2 2 0 01-2-2zM106 107a2 2 0 012-2h95a2 2 0 110 4h-95a2 2 0 01-2-2zM106 91a2 2 0 012-2h121a2 2 0 110 4H108a2 2 0 01-2-2zM106 99a2 2 0 012-2h82.957a2 2 0 010 4H108a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M106 115a2 2 0 012-2h20a2 2 0 110 4h-20a2 2 0 01-2-2z'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <path
          d='M45 104a2 2 0 012-2h20a2 2 0 110 4H47a2 2 0 01-2-2z'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <rect
          x='37'
          y='110'
          width='40'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='35'
          y='120'
          width='44'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M33 116a1 1 0 011-1h45a1 1 0 010 2H34a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M122.889 47h20.222A2.889 2.889 0 00146 44.111V23.89a2.889 2.889 0 00-2.889-2.89h-20.222A2.889 2.889 0 00120 23.889V44.11a2.889 2.889 0 002.889 2.89zm0 0l15.889-15.889L146 38.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <circle
          cx='56.5'
          cy='85.5'
          r='10.5'
          // fill="var(--base-300)"
          className='text-slate-300'
          fill='currentColor'
        ></circle>
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
    } as ContentEProps,
  }
}
