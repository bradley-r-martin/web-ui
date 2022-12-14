import CtaB from './CtaB'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CtaBProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<CtaBProps> {
  return {
    namespace: 'Cta/CtaB',
    component: CtaB,
    icon: (
      <svg className='w-full' fill='none' viewBox='0 0 266 150'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='20'
          y='68'
          width='26'
          height='5'
          rx='2.5'
          // fill="var(--main-500)"
          className='text-sky-500'
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
    } as CtaBProps,
  }
}
