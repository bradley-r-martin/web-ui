import FeatureG from './FeatureG'
import { FieldProps } from '../../../Components/field/Field.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureGProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureGProps> {
  return {
    namespace: 'Feature/FeatureG',
    component: FeatureG,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill='var(--solid)'
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M70 61a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z'
          // fill='var(--base-200)'
          className='text-slate-200'
          fill='currentColor'
        ></path>
        <path
          d='M80 65a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z'
          // fill='var(--solid-900)'
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M77 65a2 2 0 11-4 0 2 2 0 014 0z'
          // fill='var(--main-500)'
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <path
          d='M136 61a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z'
          // fill='var(--base-200)'
          className='text-slate-200'
          fill='currentColor'
        ></path>
        <path
          d='M146 65a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z'
          // fill='var(--solid-900)'
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M143 65a2 2 0 11-4 0 2 2 0 014 0z'
          // fill='var(--main-500)'
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <path
          d='M70 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z'
          // fill='var(--base-200)'
          className='text-slate-200'
          fill='currentColor'
        ></path>
        <path
          d='M80 81a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z'
          // fill='var(--solid-900)'
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M77 81a2 2 0 11-4 0 2 2 0 014 0z'
          // fill='var(--main-500)'
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <path
          d='M136 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z'
          // fill='var(--base-200)'
          className='text-slate-200'
          fill='currentColor'
        ></path>
        <path
          d='M146 81a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z'
          // fill='var(--solid-900)'
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M143 81a2 2 0 11-4 0 2 2 0 014 0z'
          // fill='var(--main-500)'
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <path
          d='M70 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z'
          // fill='var(--base-200)'
          className='text-slate-200'
          fill='currentColor'
        ></path>
        <path
          d='M80 97a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z'
          // fill='var(--solid-900)'
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M77 97a2 2 0 11-4 0 2 2 0 014 0z'
          // fill='var(--main-500)'
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <path
          d='M136 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z'
          // fill='var(--base-200)'
          className='text-slate-200'
          fill='currentColor'
        ></path>
        <path
          d='M146 97a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z'
          // fill='var(--solid-900)'
          className='text-slate-900'
          fill='currentColor'
        ></path>
        <path
          d='M143 97a2 2 0 11-4 0 2 2 0 014 0z'
          // fill='var(--main-500)'
          className='text-blue-500'
          fill='currentColor'
        ></path>
        <rect
          x='81'
          y='31'
          width='104.391'
          height='4'
          rx='2'
          // fill='var(--base-500)'
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='81'
          y='31'
          width='104.391'
          height='4'
          rx='2'
          // fill='var(--base-500)'
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='96'
          y='20'
          width='74'
          height='5'
          rx='2.5'
          // fill='var(--solid-900)'
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='97'
          y='39'
          width='73'
          height='4'
          rx='2'
          // fill='var(--base-500)'
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='113'
          y='120'
          width='40'
          height='10'
          rx='2'
          // fill='var(--main-500)'
          className='text-blue-500'
          fill='currentColor'
        ></rect>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as FeatureGProps,
  }
}
