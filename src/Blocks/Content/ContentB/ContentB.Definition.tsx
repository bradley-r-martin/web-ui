import ContentB from './ContentB'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContentBProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<ContentBProps> {
  return {
    namespace: 'Content/ContentB',
    component: ContentB,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='142'
          y='32'
          width='104.391'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='20'
          y='32'
          width='74'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='142'
          y='40'
          width='77'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='20'
          y='74'
          width='50'
          height='44'
          rx='2'
          // fill="var(--base-200)"
          className='text-slate-200'
          fill='currentColor'
        ></rect>
        <path
          d='M40.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L51 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='24'
          y='108'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='24'
          y='112'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='24'
          y='104'
          width='10'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <rect
          x='79'
          y='74'
          width='50'
          height='44'
          rx='2'
          // fill="var(--base-200)"
          className='text-slate-200'
          fill='currentColor'
        ></rect>
        <path
          d='M99.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L110 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='83'
          y='108'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='83'
          y='112'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='83'
          y='104'
          width='10'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <rect
          x='138'
          y='74'
          width='50'
          height='44'
          rx='2'
          // fill="var(--base-200)"
          className='text-slate-200'
          fill='currentColor'
        ></rect>
        <path
          d='M158.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L169 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='142'
          y='108'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='142'
          y='112'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='142'
          y='104'
          width='10'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <rect
          x='197'
          y='74'
          width='50'
          height='44'
          rx='2'
          // fill="var(--base-200)"
          className='text-slate-200'
          fill='currentColor'
        ></rect>
        <path
          d='M217.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L228 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='201'
          y='108'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='201'
          y='112'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='201'
          y='104'
          width='10'
          height='2'
          rx='1'
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
    } as ContentBProps,
  }
}
