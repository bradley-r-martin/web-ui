import { FieldsetFunctions, FieldsetProps } from './Fieldset.Definition'
import React, { forwardRef, useImperativeHandle } from 'react'

import { styleMap } from './Fieldset.Styles'
import { useDisabled } from '../../Hooks/useDisabled/useDisabled'

const Fieldset: React.ForwardRefRenderFunction<FieldsetFunctions, FieldsetProps> = (
  props: FieldsetProps,
  ref,
) => {
  const { children, disabled, stacked, ...native } = props

  const { isDisabled, enable, disable } = useDisabled()

  useImperativeHandle(ref, () => ({
    enable,
    disable,
  }))

  const classnames = styleMap({ isDisabled, stacked })

  return <div className={classnames.component}>{children}</div>
}

export default forwardRef(Fieldset)
