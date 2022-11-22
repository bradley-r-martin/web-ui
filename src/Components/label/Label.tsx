import { LabelFunctions, LabelProps } from './Label.Definition'
import { forwardRef, useImperativeHandle } from 'react'

import { styleMap } from './Label.Styles'
import { useDisabled } from '../../Hooks/useDisabled/useDisabled'

const Label: React.ForwardRefRenderFunction<LabelFunctions, LabelProps> = (
  props: LabelProps,
  ref,
) => {
  const { children, disabled, description, ...native } = props

  const { isDisabled, enable, disable } = useDisabled({ disabled })

  useImperativeHandle(ref, () => ({ enable, disable }))

  const classnames = styleMap({ isDisabled })

  return (
    <div className={classnames.component}>
      <label className={classnames.label} {...native}>
        {children}
      </label>
      {description ? <p className={classnames.description}>{description}</p> : <></>}
    </div>
  )
}

export default forwardRef(Label)
