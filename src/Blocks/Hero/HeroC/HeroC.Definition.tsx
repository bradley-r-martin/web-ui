import HeroC from './HeroC'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeroCProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<HeroCProps> {
  return {
    namespace: 'Hero/HeroC',
    component: HeroC,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='133'
          y='86'
          width='29'
          height='10'
          rx='2'
          //  fill="var(--main-500)"
          fill='currentColor'
          className='text-sky-500'
        ></rect>
        <rect
          x='168'
          y='86'
          width='29'
          height='10'
          rx='2'
          //  fill="var(--base-400)"
          fill='currentColor'
          className='text-slate-400'
        ></rect>
        <rect
          x='133'
          y='64'
          width='104'
          height='4'
          rx='2'
          //  fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></rect>
        <rect
          x='133'
          y='53'
          width='72'
          height='5'
          rx='2.5'
          //  fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <rect
          x='133'
          y='72'
          width='97'
          height='4'
          rx='2'
          //  fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></rect>
        <path
          d='M62.778 92h26.444A3.778 3.778 0 0093 88.222V61.778A3.778 3.778 0 0089.222 58H62.778A3.778 3.778 0 0059 61.778v26.444A3.778 3.778 0 0062.778 92zm0 0l20.778-20.778L93 80.667M72.222 68.389a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z'
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
    } as HeroCProps,
  }
}
