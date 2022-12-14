import TeamB from './TeamB'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TeamBProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<TeamBProps> {
  return {
    namespace: 'Team/TeamB',
    component: TeamB,
    icon: (
      <svg className='w-full' fill='none' viewBox='0 0 266 150'>
        <path
          // fill="var(--solid)"
          d='M0 0h266v150H0z'
        ></path>
        <rect
          x='110'
          y='20'
          width='46'
          height='5'
          rx='2.5'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <rect
          x='87'
          y='29'
          width='92'
          height='4'
          rx='2'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <path
          d='M39.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444H39.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944L51 61.666m-7.944-4.694a1.083 1.083 0 11-2.167 0 1.083 1.083 0 012.167 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='24'
          y='78'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='29'
          y='82'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='36'
          y='74'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M98.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444H98.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='83'
          y='78'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='88'
          y='82'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='95'
          y='74'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M157.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='142'
          y='78'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='147'
          y='82'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='154'
          y='74'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M216.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='201'
          y='78'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='206'
          y='82'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='213'
          y='74'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M39.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444H39.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944L51 107.667m-7.944-4.695a1.084 1.084 0 11-2.167.001 1.084 1.084 0 012.167-.001z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='24'
          y='124'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='29'
          y='128'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='36'
          y='120'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M98.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444H98.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='83'
          y='124'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='88'
          y='128'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='95'
          y='120'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M157.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='142'
          y='124'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='147'
          y='128'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='154'
          y='120'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
          fill='currentColor'
        ></rect>
        <path
          d='M216.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <rect
          x='201'
          y='124'
          width='41'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='206'
          y='128'
          width='32'
          height='2'
          rx='1'
          // fill="var(--base-500)"
          className='text-slate-500'
          fill='currentColor'
        ></rect>
        <rect
          x='213'
          y='120'
          width='17'
          height='2'
          rx='1'
          // fill="var(--solid-900)"
          className='text-slate-900'
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
    } as TeamBProps,
  }
}