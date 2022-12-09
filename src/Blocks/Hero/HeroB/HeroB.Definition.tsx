import HeroB from './HeroB'
import React from 'react'
import TypeOfBlock from '../../../Types/TypeOfBlock'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeroBProps {}

export function config(): TypeOfBlock<HeroBProps> {
  return {
    namespace: 'Hero/HeroB',
    component: HeroB,
    icon: <></>,
    fields: [],
    data: {} as HeroBProps,
  }
}
