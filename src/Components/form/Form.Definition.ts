import React from 'react'

export interface FormProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  // inherit?: boolean
  // disabled?: boolean
  // focused?: boolean
  // values?: object
  // onChange?: () => void
  // onSubmit?: () => void
  // onClear?: () => void
  // onFresh?: () => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormFunctions {
  // disable: () => void
  // enable: () => void
  // focus: () => void
  // blur: () => void
  // clear: () => void
  // fresh: () => void
  // values: () => void
}
