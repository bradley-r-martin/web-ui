import BlogB from './BlogB'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'


export interface BlogBProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<BlogBProps> {
  return {
    namespace: 'Blog/BlogB',
    component: BlogB,
    icon: (
      <svg className='w-full ' viewBox='0 0 266 150' fill='none'>
        <path
          // fill='var(--solid)'
          // fill='currentColor'
          // className='text-slate-500'
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='20'
          y='43'
          width='68'
          height='63'
          rx='2'
          // fill='var(--base-200)'
          fill='currentColor'
          className='text-slate-200'
        ></rect>
        <path
          d='M29 73a1 1 0 011-1h48a1 1 0 110 2H30a1 1 0 01-1-1zM33 78a1 1 0 011-1h40a1 1 0 110 2H34a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M48 83a1 1 0 011-1h11a1 1 0 110 2H49a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <path
          d='M37 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></path>
        <rect
          x='99'
          y='43'
          width='68'
          height='63'
          rx='2'
          // fill='var(--base-200)'
          fill='currentColor'
          className='text-slate-200'
        ></rect>
        <path
          d='M108 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM112 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M127 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <path
          d='M116 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></path>
        <rect
          x='178'
          y='43'
          width='68'
          height='63'
          rx='2'
          // fill='var(--base-200)'
          fill='currentColor'
          className='text-slate-200'
        ></rect>
        <path
          d='M187 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM191 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M206 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <path
          d='M195 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></path>
      </svg>
    ),
    fields: [

    ],
    data: {
      title: 'test Title',
      image: {
        url: 'test-url',
      },
    } as BlogBProps,
  }
}
