import { FieldProps } from '../../../Components/field/Field.Definition'
import HeroA from './HeroA'
import { ImageIO } from '../../../Components/inputs/image/Image.Definition'
import React from 'react'
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
    icon: <></>,
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
