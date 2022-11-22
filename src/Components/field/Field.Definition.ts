import { InputProps } from '../inputs/Input.Definition'
import { LabelProps } from '../label/Label.Definition'
import { UseDisabledFunctions } from '../../Hooks/useDisabled/useDisabled.Definition'

export type FieldProps = InputProps & {
  label?: LabelProps['children']
  description?: LabelProps['description']
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FieldFunctions extends UseDisabledFunctions {}
