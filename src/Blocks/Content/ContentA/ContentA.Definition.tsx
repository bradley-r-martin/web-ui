import ContentA from './ContentA'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContentAProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<ContentAProps> {
  return {
    namespace: 'Content/ContentA',
    component: ContentA,
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
          className='text-sky-500'
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
          x='85'
          y='39'
          width='97.365'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='26'
          y='73'
          width='28'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='26'
          y='79'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='26'
          y='84'
          width='38'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='26'
          y='89'
          width='24'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <rect
          x='20'
          y='62'
          width='1'
          height='39'
          rx='0.5'
          // fill="var(--base-400)"
          className='text-slate-400'
          fill='currentColor'
        ></rect>
        <rect
          x='86'
          y='73'
          width='28'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='86'
          y='79'
          width='34'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='86'
          y='84'
          width='38'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='86'
          y='89'
          width='24'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <rect
          x='80'
          y='62'
          width='1'
          height='39'
          rx='0.5'
          // fill="var(--base-400)"
          className='text-slate-400'
          fill='currentColor'
        ></rect>
        <rect
          x='146.136'
          y='73'
          width='28.636'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='146.136'
          y='79'
          width='34.773'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='146.136'
          y='84'
          width='38.864'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='146.136'
          y='89'
          width='24.546'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <rect
          x='140'
          y='62'
          width='1.023'
          height='39'
          rx='0.511'
          // fill="var(--base-400)"
          className='text-slate-400'
          fill='currentColor'
        ></rect>
        <rect
          x='207.136'
          y='73'
          width='28.636'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='207.136'
          y='79'
          width='34.773'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='207.136'
          y='84'
          width='38.864'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='207.136'
          y='89'
          width='24.546'
          height='2'
          rx='1'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
        <rect
          x='201'
          y='62'
          width='1.023'
          height='39'
          rx='0.511'
          // fill="var(--base-400)"
          className='text-slate-400'
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
    } as ContentAProps,
  }
}
