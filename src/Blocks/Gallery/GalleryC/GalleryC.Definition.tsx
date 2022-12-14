import GalleryC from './GalleryC'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GalleryCProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<GalleryCProps> {
  return {
    namespace: 'Gallery/GalleryC',
    component: GalleryC,
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
          d='M20 61h72v32H20zM97 61h72v32H97zM174 61h72v32h-72zM20 98h72v32H20zM97 98h72v32H97zM174 98h72v32h-72z'
        ></path>
        <rect
          x='81'
          y='31'
          width='104.391'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='81'
          y='31'
          width='104.391'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='96'
          y='20'
          width='74'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='97'
          y='39'
          width='73'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M50.556 84h10.888c.86 0 1.556-.696 1.556-1.556V71.556c0-.86-.696-1.556-1.556-1.556H50.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L63 79.334m-8.556-5.056a1.167 1.167 0 11-2.333 0 1.167 1.167 0 012.333 0zM127.556 84h10.888c.86 0 1.556-.696 1.556-1.556V71.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0zM204.556 84h10.888c.86 0 1.556-.696 1.556-1.556V71.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0zM204.556 121h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.889m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0zM127.556 121h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.889m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0zM50.556 121h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556H50.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L63 116.333m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0z'
          stroke='currentColor'
          strokeWidth='1.2'
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
    } as GalleryCProps,
  }
}
