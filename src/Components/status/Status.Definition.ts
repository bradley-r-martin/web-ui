import React from 'react'
import TypeOfIntent from '../../Types/TypeOfIntent'
import TypeOfSize from '../../Types/TypeOfSize'

export interface StatusProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  children: React.ReactNode
  intent?: TypeOfIntent
  size?: TypeOfSize
}
