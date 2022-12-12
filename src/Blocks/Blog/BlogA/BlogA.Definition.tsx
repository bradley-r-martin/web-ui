import BlogA from './BlogA'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

export interface BlogAProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<BlogAProps> {
  return {
    namespace: 'Blog/BlogA',
    component: BlogA,
    icon: (
      <svg className="w-full" viewBox="0 0 266 150" fill="none">
        <path
          // fill="var(--solid)" 
          d="M0 0h266v150H0z"></path>
        <rect x="20.5" y="43.5" width="67" height="62" rx="1.5"
          // fill="var(--solid)" 
          stroke="currentColor"></rect>
        <path d="M48.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556H48.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L61 64.334m-8.556-5.056a1.167 1.167 0 11-2.333 0 1.167 1.167 0 012.333 0z"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M26 88a1 1 0 011-1h48a1 1 0 110 2H27a1 1 0 01-1-1zM26 93a1 1 0 011-1h40a1 1 0 110 2H27a1 1 0 01-1-1z"
          // fill="currentColor"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path d="M26 98a1 1 0 011-1h11a1 1 0 110 2H27a1 1 0 01-1-1z"
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <path d="M26 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z"
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></path>
        <rect x="99.5" y="43.5" width="67" height="62" rx="1.5"
          // fill="var(--solid)" 
          stroke="currentColor"></rect>
        <path d="M127.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M105 88a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM105 93a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z"
          // fill="currentColor"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path d="M105 98a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z"
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <path d="M105 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z"
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></path>
        <rect x="178.5" y="43.5" width="67" height="62" rx="1.5"
          // fill="var(--solid)" 
          stroke="currentColor"></rect>
        <path d="M206.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M184 88a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM184 93a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z"
          // fill="var(--base-500)"
          fill='currentColor'
          className='text-slate-500'
        ></path>
        <path d="M184 98a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z"
          // fill="var(--main-500)"
          fill='currentColor'
          className='text-sky-500'
        ></path>
        <path d="M184 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z"
          // fill="var(--solid-900)"
          fill='currentColor'
          className='text-slate-900'
        ></path></svg>
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
    } as BlogAProps,
  }
}
