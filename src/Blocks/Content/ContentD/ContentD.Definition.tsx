import ContentD from './ContentD'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContentDProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<ContentDProps> {
  return {
    namespace: 'Content/ContentD',
    component: ContentD,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M128 44.5a.5.5 0 011 0v62a.5.5 0 01-1 0v-62z'
          // fill="var(--base-400)"
          className='text-slate-400'
          fill='currentColor'
        ></path>
        <rect
          x='20'
          y='69'
          width='70'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='20'
          y='78'
          width='92'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M144 60a2 2 0 012-2h75a2 2 0 110 4h-75a2 2 0 01-2-2zM144 68a2 2 0 012-2h88a2 2 0 110 4h-88a2 2 0 01-2-2zM144 76a2 2 0 012-2h60a2 2 0 110 4h-60a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M190 89a2 2 0 012-2h20a2 2 0 110 4h-20a2 2 0 01-2-2z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <rect
          x='144'
          y='84'
          width='40'
          height='10'
          rx='2'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
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
    } as ContentDProps,
  }
}
