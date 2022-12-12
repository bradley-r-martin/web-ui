import HeroB from './HeroB'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeroBProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<HeroBProps> {
  return {
    namespace: 'Hero/HeroB',
    component: HeroB,
    icon: (
      <svg className="w-full" viewBox="0 0 266 150" fill="none">
        <path
          // fill="var(--solid)" 
          d="M0 0h266v150H0z"></path>
        <rect x="136" y="114" width="29" height="10" rx="2"
          // fill="var(--base-400)"
          fill='currentColor'
          className='text-slate-400'
        ></rect>
        <rect x="101" y="114" width="29" height="10" rx="2"
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-sky-500'
        ></rect>
        <rect x="81" y="92" width="104" height="4" rx="2"
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></rect>
        <rect x="97" y="81" width="72" height="5" rx="2.5"
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></rect>
        <rect x="85" y="100" width="97" height="4" rx="2"
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></rect>
        <path d="M119.778 61h26.444A3.778 3.778 0 00150 57.222V30.778A3.778 3.778 0 00146.222 27h-26.444A3.778 3.778 0 00116 30.778v26.444A3.778 3.778 0 00119.778 61zm0 0l20.778-20.778L150 49.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
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
    } as HeroBProps,
  }
}
