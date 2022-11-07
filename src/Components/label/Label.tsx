import { LabelFunctions, LabelProps } from './Label.Definition'
import { forwardRef, useImperativeHandle } from 'react'

const Label: React.ForwardRefRenderFunction<LabelFunctions, LabelProps> = (
  props: LabelProps,
  ref,
) => {
  const { children, ...native } = props

  useImperativeHandle(ref, () => ({}))

  return <label {...native}>{children}</label>
}

export default forwardRef(Label)
