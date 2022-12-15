import FeatureE from './FeatureE'
import { FieldProps } from '../../../Components/field/Field.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureEProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<FeatureEProps> {
  return {
    namespace: 'Feature/FeatureE',
    component: FeatureE,
    icon: (
      <svg className='w-full' viewBox='0 0 266 150' fill='none'>
        <path
          // fill='var(--solid)'
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='20'
          y='78'
          width='69'
          height='31'
          rx='2'
          // fill='var(--base-200)'
          fill='currentColor'
          className='text-slate-200'
        ></rect>
        <rect
          x='113'
          y='41'
          width='40'
          height='3'
          rx='1.5'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></rect>
        <circle
          cx='28'
          cy='86'
          r='3'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></circle>
        <rect
          x='98'
          y='49'
          width='70'
          height='5'
          rx='2.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <path
          d='M25 93a1 1 0 011-1h54a1 1 0 110 2H26a1 1 0 01-1-1zM25 98a1 1 0 011-1h44a1 1 0 110 2H26a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M25 103a1 1 0 011-1h11a1 1 0 010 2H26a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='34'
          y='84.5'
          width='35'
          height='3'
          rx='1.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <rect
          x='99'
          y='78'
          width='69'
          height='31'
          rx='2'
          // fill='var(--base-200)'
          fill='currentColor'
          className='text-slate-200'
        ></rect>
        <circle
          cx='107'
          cy='86'
          r='3'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></circle>
        <path
          d='M104 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM104 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M104 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='113'
          y='84.5'
          width='35'
          height='3'
          rx='1.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <rect
          x='178'
          y='78'
          width='69'
          height='31'
          rx='2'
          // fill='var(--base-200)'
          fill='currentColor'
          className='text-slate-200'
        ></rect>
        <circle
          cx='186'
          cy='86'
          r='3'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></circle>
        <path
          d='M183 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM183 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z'
          // fill='var(--base-500)'
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path
          d='M183 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z'
          // fill='var(--main-500)'
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <rect
          x='192'
          y='84.5'
          width='35'
          height='3'
          rx='1.5'
          // fill='var(--solid-900)'
          fill='currentColor'
          className='text-slate-900'
        ></rect>
      </svg>
    ),
    fields: [{ type: 'textbox', name: 'title', label: 'Title:' } as FieldProps],
    data: {
      title: 'test Title',
    } as FeatureEProps,
  }
}
