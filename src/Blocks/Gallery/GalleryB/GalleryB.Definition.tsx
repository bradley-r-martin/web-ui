import { FieldProps } from '../../../Components/field/Field.Definition'
import GalleryB from './GalleryB'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GalleryBProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<GalleryBProps> {
  return {
    namespace: 'Gallery/GalleryB',
    component: GalleryB,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          // fill="var(--base-200)"
          className='text-slate-200'
          fill='currentColor'
          d='M71 84h62v38H71zM71 27h127v54H71zM136 84h62v38h-62z'
        ></path>
        <path
          d='M93 54.5a1.5 1.5 0 011.5-1.5h77a1.5 1.5 0 010 3h-77a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M123 61.5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <rect
          x='108'
          y='45'
          width='50'
          height='4'
          rx='2'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M81 103.5a1.5 1.5 0 011.5-1.5h39a1.5 1.5 0 010 3h-39a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M97 110.5a1.5 1.5 0 011.5-1.5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <rect
          x='89'
          y='94'
          width='26'
          height='4'
          rx='2'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M146 103.5a1.5 1.5 0 011.5-1.5h39a1.5 1.5 0 010 3h-39a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M162 110.5a1.5 1.5 0 011.5-1.5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 01-1.5-1.5z'
          // fill="var(--main-500)"
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <rect
          x='154'
          y='94'
          width='26'
          height='4'
          rx='2'
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
    } as GalleryBProps,
  }
}
