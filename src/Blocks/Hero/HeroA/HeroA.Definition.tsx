import { FieldProps } from '../../../Components/field/Field.Definition'
import HeroA from './HeroA'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
import { Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { TextboxIO } from '../../../Components/inputs/textbox/Textbox.Definition'
import TypeOfBlock from '../../../Types/TypeOfBlock'

export interface HeroAProps {
  title: TextboxIO
  image: ImageIO
}

export function config(): TypeOfBlock<HeroAProps> {
  return {
    namespace: 'Hero/HeroA',
    component: HeroA,
    icon: <Square3Stack3DIcon className='h-6 w-6' />,
    fields: [
      { type: 'textbox', name: 'title', label: 'Title:' } as FieldProps,
      { type: 'image', name: 'image', label: 'Image:' } as FieldProps,
    ],
    data: {
      title: 'test Title',
      image: {
        url: 'test-url',
      },
    } as HeroAProps,
  }
}