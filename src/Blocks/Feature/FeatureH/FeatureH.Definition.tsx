import FeatureH from './FeatureH'
import { FieldProps } from '../../../Components/field/Field.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureHProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureHProps> {
  return {
    namespace: 'Feature/FeatureH',
    component: FeatureH,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
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
          y='39'
          width='73'
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
          x='28'
          y='62'
          width='35'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='35'
          y='70'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M32 71a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='35'
          y='77'
          width='16'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M32 78a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='35'
          y='84'
          width='28'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M32 85a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='35'
          y='91'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M32 92a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='35'
          y='98'
          width='21'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M32 99a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='85'
          y='62'
          width='33'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='92'
          y='70'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M89 71a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='92'
          y='77'
          width='16'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M89 78a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='92'
          y='84'
          width='28'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M89 85a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='92'
          y='91'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M89 92a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='92'
          y='98'
          width='21'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M89 99a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='142'
          y='62'
          width='28'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='149'
          y='70'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M146 71a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='149'
          y='77'
          width='16'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M146 78a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='149'
          y='84'
          width='28'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M146 85a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='149'
          y='91'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M146 92a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='149'
          y='98'
          width='21'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M146 99a2 2 0 11-3.999.001A2 2 0 01146 99z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='199'
          y='62'
          width='39'
          height='3'
          rx='1.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='206'
          y='70'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M203 71a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='206'
          y='77'
          width='16'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M203 78a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='206'
          y='84'
          width='28'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M203 85a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='206'
          y='91'
          width='23'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M203 92a2 2 0 11-4 0 2 2 0 014 0z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
        ></path>
        <rect
          x='206'
          y='98'
          width='21'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M203 99a2 2 0 11-3.999.001A2 2 0 01203 99z'
          // fill="var(--main-200)"
          className='text-sky-200'
          fill='currentColor'
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
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as FeatureHProps,
  }
}
