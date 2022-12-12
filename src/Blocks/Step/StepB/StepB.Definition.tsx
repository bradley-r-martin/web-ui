import StepB from './StepB'
import { FieldProps } from '../../../Components/field/Field.Definition'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StepBProps {
  title: TextboxIO
}

export function config(): TypeOfBlock<StepBProps> {
  return {
    namespace: 'Step/StepB',
    component: StepB,
    icon: (
      <svg className="w-full" viewBox="0 0 266 150" fill="none">
        <path
          // fill="var(--solid)"
          d="M0 0h266v150H0z"
        ></path>
        <path d="M24 28.5a.5.5 0 011 0v93a.5.5 0 01-1 0v-93z"
          // fill="var(--base-400)"
          fill="currentColor"
          className="text-slate-400"
        ></path>
        <path d="M26 40.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          // fill="var(--main-500)"
          fill="currentColor"
          className="text-sky-500"
        ></path>
        <path d="M47 43a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z"
          // fill="var(--base-500)"
          fill="currentColor"
          className="text-slate-500"
        ></path>
        <rect x="47" y="36" width="35" height="3" rx="1.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className="text-slate-900"
        ></rect>
        <circle cx="36.5" cy="40.5" r="6.5"
          // fill="var(--main-200)"
          fill="currentColor"
          className="text-sky-200"
        ></circle>
        <path d="M26 63.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          // fill="var(--main-500)"
          fill="currentColor"
          className="text-sky-500"
        ></path>
        <path d="M47 66a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z"
          // fill="var(--base-500)"
          fill="currentColor"
          className="text-slate-500"
        ></path>
        <rect x="47" y="59" width="35" height="3" rx="1.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className="text-slate-900"
        ></rect>
        <circle cx="36.5" cy="63.5" r="6.5"
          // fill="var(--main-200)"
          fill="currentColor"
          className="text-sky-200"
        ></circle>
        <path d="M26 86.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          // fill="var(--main-500)"
          fill="currentColor"
          className="text-sky-500"
        ></path>
        <path d="M47 89a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z"
          // fill="var(--base-500)"
          fill="currentColor"
          className="text-slate-500"
        ></path>
        <rect x="47" y="82" width="35" height="3" rx="1.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className="text-slate-900"
        ></rect>
        <circle cx="36.5" cy="86.5" r="6.5"
          // fill="var(--main-200)"
          fill="currentColor"
          className="text-sky-200"
        ></circle>
        <path d="M26 109.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          // fill="var(--main-500)"
          fill="currentColor"
          className="text-sky-500"
        ></path>
        <path d="M47 112a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z"
          // fill="var(--base-500)"
          fill="currentColor"
          className="text-slate-500"
        ></path>
        <rect x="47" y="105" width="35" height="3" rx="1.5"
          // fill="var(--solid-900)"
          fill="currentColor"
          className="text-slate-900"
        ></rect>
        <circle cx="36.5" cy="109.5" r="6.5"
          // fill="var(--main-200)"
          fill="currentColor"
          className="text-sky-200"
        ></circle>
        <path d="M175.792 89h26.544a3.785 3.785 0 003.792-3.778V58.778A3.785 3.785 0 00202.336 55h-26.544A3.785 3.785 0 00172 58.778v26.444A3.785 3.785 0 00175.792 89zm0 0l20.856-20.778 9.48 9.445m-20.856-12.278a2.838 2.838 0 01-2.844 2.833 2.838 2.838 0 01-2.844-2.833 2.838 2.838 0 012.844-2.833 2.838 2.838 0 012.844 2.833z"
          stroke="none"
          strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        ></path>
      </svg>
    ),
    fields: [
      { type: 'textbox', name: 'title', label: 'Title:' } as FieldProps,
    ],
    data: {
      title: 'test Title'
    } as StepBProps,
  }
}
