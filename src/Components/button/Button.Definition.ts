import Button from './Button'
import { HasEnhancers } from '../../Traits/HasEnhancers'
import { HasVariants } from '../../Traits/HasVariants'
import React from 'react'
import TypeOfIntent from '../../Types/TypeOfIntent'
import TypeOfShape from '../../Types/TypeOfShape'
import TypeOfSize from '../../Types/TypeOfSize'
import TypeOfVariant from '../../Types/TypeOfVariant'

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref' | 'size'>,
    HasEnhancers,
    HasVariants {
  inherit?: boolean
  intent?: TypeOfIntent
  variant?: TypeOfVariant
  size?: TypeOfSize
  shape?: TypeOfShape
  loading?: boolean
  selected?: boolean
  type?: 'button' | 'submit'
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonFunctions {}

export type ButtonReference = React.ElementRef<typeof Button>
