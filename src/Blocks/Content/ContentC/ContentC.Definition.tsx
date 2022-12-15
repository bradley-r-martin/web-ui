import ContentC from './ContentC'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContentCProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<ContentCProps> {
  return {
    namespace: 'Content/ContentC',
    component: ContentC,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='113'
          y='120'
          width='40'
          height='10'
          rx='2'
          // fill="var(--main-500)"
          className='text-blue-500'
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
          x='20.5'
          y='51.5'
          width='69'
          height='23'
          rx='1.5'
          // fill="var(--solid)"
          stroke='currentColor'
        ></rect>
        <rect
          x='24'
          y='65'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='24'
          y='69'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <circle
          cx='28'
          cy='59'
          r='4'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <rect
          x='98.5'
          y='51.5'
          width='69'
          height='23'
          rx='1.5'
          // fill='currentColor'
          stroke='currentColor'
        ></rect>
        <rect
          x='102'
          y='65'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='102'
          y='69'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <circle
          cx='106'
          cy='59'
          r='4'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <rect
          x='176.5'
          y='51.5'
          width='69'
          height='23'
          rx='1.5'
          // fill="var(--solid)"
          stroke='currentColor'
        ></rect>
        <rect
          x='180'
          y='65'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='180'
          y='69'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <circle
          cx='184'
          cy='59'
          r='4'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <rect
          x='20.5'
          y='81.5'
          width='69'
          height='23'
          rx='1.5'
          // fill="var(--solid)"
          stroke='currentColor'
        ></rect>
        <rect
          x='24'
          y='95'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='24'
          y='99'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <circle
          cx='28'
          cy='89'
          r='4'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <rect
          x='98.5'
          y='81.5'
          width='69'
          height='23'
          rx='1.5'
          // fill="var(--solid)"
          stroke='currentColor'
        ></rect>
        <rect
          x='102'
          y='95'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='102'
          y='99'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <circle
          cx='106'
          cy='89'
          r='4'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <rect
          x='176.5'
          y='81.5'
          width='69'
          height='23'
          rx='1.5'
          // fill="var(--solid)"
          stroke='currentColor'
        ></rect>
        <rect
          x='180'
          y='95'
          width='28'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='180'
          y='99'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <circle
          cx='184'
          cy='89'
          r='4'
          // fill="var(--main-200)"
          className='text-sky-200'
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
    } as ContentCProps,
  }
}
