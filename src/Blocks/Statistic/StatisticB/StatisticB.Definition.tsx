import StatisticB from './StatisticB'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatisticBProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<StatisticBProps> {
  return {
    namespace: 'Statistic/StatisticB',
    component: StatisticB,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <path
          d='M21 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5H21a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z'
          stroke='currentColor'
        ></path>
        <path
          d='M50 75a5 5 0 11-10 0 5 5 0 0110 0z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <path
          d='M39 92a1 1 0 011-1h10a1 1 0 110 2H40a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <rect
          x='35'
          y='84'
          width='20'
          height='4'
          rx='2'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M80 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5H80a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z'
          stroke='currentColor'
        ></path>
        <path
          d='M109 75a5 5 0 11-10 0 5 5 0 0110 0z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <path
          d='M98 92a1 1 0 011-1h10a1 1 0 010 2H99a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <rect
          x='94'
          y='84'
          width='20'
          height='4'
          rx='2'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M139 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5h-48a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z'
          stroke='currentColor'
        ></path>
        <path
          d='M168 75a5 5 0 11-10 0 5 5 0 0110 0z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <path
          d='M157 92a1 1 0 011-1h10a1 1 0 010 2h-10a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <rect
          x='153'
          y='84'
          width='20'
          height='4'
          rx='2'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M198 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5h-48a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z'
          stroke='currentColor'
        ></path>
        <path
          d='M227 75a5 5 0 11-10 0 5 5 0 0110 0z'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></path>
        <path
          d='M216 92a1 1 0 011-1h10a1 1 0 010 2h-10a1 1 0 01-1-1z'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></path>
        <rect
          x='212'
          y='84'
          width='20'
          height='4'
          rx='2'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='81'
          y='36'
          width='104.391'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='81'
          y='36'
          width='104.391'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='96'
          y='25'
          width='74'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='97'
          y='44'
          width='73'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='113'
          y='115'
          width='40'
          height='10'
          rx='2'
          // fill="var(--main-500)"
          className='text-sky-500'
          fill='currentColor'
        ></rect>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as StatisticBProps,
  }
}
