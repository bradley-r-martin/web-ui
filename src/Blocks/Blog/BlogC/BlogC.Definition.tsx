import BlogC from './BlogC'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'


export interface BlogCProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<BlogCProps> {
  return {
    namespace: 'Blog/BlogC',
    component: BlogC,
    icon: (
      <svg className="w-full" viewBox="0 0 266 150" fill="none">
        <path
          // fill="var(--solid)"
          d="M0 0h266v150H0z"></path>
        <rect x="20" y="48" width="70" height="5" rx="2.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className='text-slate-900'
        ></rect>
        <rect x="20" y="36" width="34" height="8" rx="2"
          // fill="var(--main-100)"
          fill="currentColor"
          className='text-sky-100'
        ></rect>
        <rect x="20" y="58" width="92" height="4" rx="2"
          // fill="var(--base-500)"
          fill="currentColor"
          className='text-slate-500'
        ></rect>
        <rect x="20" y="66" width="82" height="4" rx="2"
          // fill="var(--base-500)"
          fill="currentColor"
          className='text-slate-500'
        ></rect>
        <rect x="20" y="74" width="68" height="4" rx="2"
          // fill="var(--base-500)"
          fill="currentColor"
        ></rect>
        <rect x="20" y="82" width="18" height="4" rx="2"
          // fill="var(--main-500)"
          fill="currentColor"
          className='text-sky-500'
        ></rect>
        <rect x="23" y="39" width="28" height="2" rx="1"
          // fill="var(--main-500)"
          fill="currentColor"
          className='text-sky-500'
        ></rect>
        <path d="M121.5 93a.5.5 0 010 1h-101a.5.5 0 010-1h101z"
          // fill="var(--base-300)"
          fill="currentColor"
          className='text-slate-300'
        ></path>
        <circle cx="27.5" cy="107.5" r="7.5"
          // fill="var(--base-300)"
          fill="currentColor"
          className='text-slate-300'
        ></circle>
        <path d="M39 110a1 1 0 011-1h19a1 1 0 010 2H40a1 1 0 01-1-1z"
          // fill="var(--base-500)"
          fill="currentColor"
          className='text-slate-500'
        ></path>
        <rect x="39" y="103" width="35" height="3" rx="1.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className='text-slate-900'
        ></rect>
        <rect x="144" y="48" width="70" height="5" rx="2.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className='text-slate-900'
        ></rect>
        <rect x="144" y="36" width="34" height="8" rx="2"
          // fill="var(--main-100)"
          fill="currentColor"
          className='text-sky-100'
        ></rect>
        <rect x="144" y="58" width="92" height="4" rx="2"
          // fill="var(--base-500)"
          fill="currentColor"
          className='text-slate-500'
        ></rect>
        <rect x="144" y="66" width="82" height="4" rx="2"
          // fill="var(--base-500)"
          fill="currentColor"
          className='text-slate-500'
        ></rect>
        <rect x="144" y="74" width="68" height="4" rx="2"
          // fill="var(--base-500)"
          fill="currentColor"
          className='text-slate-500'
        ></rect>
        <rect x="144" y="82" width="18" height="4" rx="2"
          // fill="var(--main-500)"
          fill="currentColor"
          className='text-sky-500'
        ></rect>
        <rect x="147" y="39" width="28" height="2" rx="1"
          // fill="var(--main-500)"
          fill="currentColor"
          className='text-sky-500'
        ></rect>
        <path d="M245.5 93a.5.5 0 010 1h-101a.5.5 0 010-1h101z"
          // fill="var(--base-300)"
          fill="currentColor"
          className='text-slate-300'
        ></path>
        <circle cx="151.5" cy="107.5" r="7.5"
          // fill="var(--base-300)"
          fill="currentColor"
          className='text-slate-300'
        ></circle>
        <path d="M163 110a1 1 0 011-1h19a1 1 0 010 2h-19a1 1 0 01-1-1z"
          // fill="var(--base-500)"
          fill="currentColor"
          className='text-slate-500'
        ></path>
        <rect x="163" y="103" width="35" height="3" rx="1.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className='text-slate-900'
        ></rect>
      </svg>
    ),
    fields: [

    ],
    data: {
      title: 'test Title',
      image: {
        url: 'test-url',
      },
    } as BlogCProps,
  }
}
