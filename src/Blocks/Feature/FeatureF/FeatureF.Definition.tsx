import FeatureF from './FeatureF'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureFProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureFProps> {
  return {
    namespace: 'Feature/FeatureF',
    component: FeatureF,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <circle
          cx='88'
          cy='28'
          r='8'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <path
          d='M102 28a1 1 0 011-1h68a1 1 0 010 2h-68a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M102 33a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <rect
          x='102'
          y='21'
          width='40'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <circle
          cx='88'
          cy='98'
          r='8'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <path
          d='M102 98a1 1 0 011-1h68a1 1 0 010 2h-68a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M102 103a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <rect
          x='102'
          y='91'
          width='40'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <circle
          cx='178'
          cy='63'
          r='8'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></circle>
        <path
          d='M80 63a1 1 0 011-1h68a1 1 0 010 2H81a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <path
          d='M80 68a1 1 0 011-1h14a1 1 0 110 2H81a1 1 0 01-1-1z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <rect
          x='80'
          y='56'
          width='40'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
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
        <path
          d='M185.5 45a.5.5 0 010 1h-105a.5.5 0 010-1h105zM185.5 80a.5.5 0 010 1h-105a.5.5 0 010-1h105z'
          // fill="var(--base-400)"
          className='text-slate-400'
          fill='currentColor'
        ></path>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as FeatureFProps,
  }
}
