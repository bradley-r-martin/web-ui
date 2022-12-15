import ContentF from './ContentF'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContentFProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<ContentFProps> {
  return {
    namespace: 'Content/ContentF',
    component: ContentF,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M41.692 86a2 2 0 012-2H114.4a2 2 0 010 4H43.692a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <rect
          x='59'
          y='104'
          width='40'
          height='10'
          rx='2'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <path
          d='M35 94a2 2 0 012-2h83a2 2 0 110 4H37a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M68.889 63H89.11A2.889 2.889 0 0092 60.111V39.89A2.889 2.889 0 0089.111 37H68.89A2.889 2.889 0 0066 39.889V60.11A2.889 2.889 0 0068.889 63zm0 0l15.889-15.889L92 54.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='56'
          y='73'
          width='46'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M150.692 86a2 2 0 012-2h70.707a2 2 0 010 4h-70.707a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <rect
          x='168'
          y='104'
          width='40'
          height='10'
          rx='2'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <path
          d='M144 94a2 2 0 012-2h83a2 2 0 110 4h-83a2 2 0 01-2-2z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M177.889 63h20.222A2.889 2.889 0 00201 60.111V39.89a2.889 2.889 0 00-2.889-2.89h-20.222A2.889 2.889 0 00175 39.889V60.11a2.889 2.889 0 002.889 2.89zm0 0l15.889-15.889L201 54.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='165'
          y='73'
          width='46'
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
    } as ContentFProps,
  }
}
