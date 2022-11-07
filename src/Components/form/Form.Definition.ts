import React from 'react'

export interface FormProps {
  children?: React.ReactNode
  inherit?: boolean
  disabled?: boolean
  focused?: boolean
  values?: object
  onChange?: () => void
  onSubmit?: () => void
  onClear?: () => void
  onFresh?: () => void
}

export interface FormFunctions {
  disable: () => void
  enable: () => void
  focus: () => void
  blur: () => void
  clear: () => void
  fresh: () => void
  values: () => void
}
