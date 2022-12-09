import { FieldProps } from '../Components/field/Field.Definition'
import React from 'react'

export type TypeOfBlock<Props = any> = {
  namespace: string
  component: React.FunctionComponent<Props>
  icon: React.ReactNode
  fields: FieldProps[]
  data?: { [key: string]: any }
}
export default TypeOfBlock
