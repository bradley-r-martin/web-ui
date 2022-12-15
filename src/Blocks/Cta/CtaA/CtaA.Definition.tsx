import CtaA from './CtaA'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CtaAProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<CtaAProps> {
  return {
    namespace: 'Cta/CtaA',
    component: CtaA,
    icon: (
      <svg className='w-full' fill='none' viewBox='0 0 266 150'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='20'
          y='68'
          width='119'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='20'
          y='77'
          width='92'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='206'
          y='70'
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
    } as CtaAProps,
  }
}
