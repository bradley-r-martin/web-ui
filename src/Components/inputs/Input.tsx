import { DateFunctions, DateProps } from './date/Date.Definition'
import { InputFunctions, InputProps } from './Input.Definition'
<<<<<<< Updated upstream
import React, { ForwardedRef, forwardRef } from 'react'
=======
import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { TextareaFunctions, TextareaProps } from './textarea/Textarea.Definition'
import { TextboxFunctions, TextboxProps } from './textbox/Textbox.Definition'
>>>>>>> Stashed changes

import Date from './date/Date'
import Textarea from './textarea/Textarea'
<<<<<<< Updated upstream
import { TextareaFunctions, TextareaProps } from './textarea/Textarea.Definition'
=======
>>>>>>> Stashed changes
import Textbox from './textbox/Textbox'
import { styleMap } from './Input.Styles'
import { useDisabled } from '../../Hooks/useDisabled/useDisabled'
import { useEnhancer } from '../../Hooks/useEnhancer/useEnhancer'
import { useVocabulary } from '../../Hooks/useVocabulary/useVocabulary'

const Input: React.ForwardRefRenderFunction<InputFunctions, InputProps> = (
  props: InputProps,
  ref,
) => {
  const { type, ...native } = props

<<<<<<< Updated upstream
  switch (type) {
    case 'textbox':
      return <Textbox ref={ref} {...(native as TextboxProps)} />
    case 'textarea' :
      return <Textarea ref={ref as ForwardedRef<TextareaFunctions>} {...(native as TextareaProps)} />
    default:
      return <>Unknown input type</>
=======
  const { enhancers, disabled, inherit, variant } = props

  const inputRef = useRef(null)

  function focus() {
    // something
    inputRef?.current?.focus()
>>>>>>> Stashed changes
  }

  const [value, setValue] = useState('')

  const { words, lines, characters } = useVocabulary({ value })

  const { isDisabled, enable, disable } = useDisabled({ disabled, inherit })

  const { TopEnhancer, BottomEnhancer, LeftEnhancer, RightEnhancer } = useEnhancer({
    focus,
    enhancers,
  })

  const abilities = { enable, disable, setValue, value, words, lines, characters, focus }

  function component() {
    switch (type) {
      case 'textbox':
        return (
          <Textbox
            ref={inputRef as ForwardedRef<TextboxFunctions>}
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            {...(native as TextboxProps)}
          />
        )
      case 'textarea':
        return (
          <Textarea
            ref={inputRef as ForwardedRef<TextareaFunctions>}
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            {...(native as TextareaProps)}
          />
        )
      case 'date':
        return (
          <Date
            ref={inputRef as ForwardedRef<DateFunctions>}
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            {...(native as DateProps)}
          />
        )
      default:
        return <>Unknown input type</>
    }
  }
  const classnames = styleMap({ ...props, isDisabled })

  useImperativeHandle(ref, () => abilities)

  return (
    <div
      className={classnames.area}
      onMouseDown={(e) => {
        e.preventDefault()
        focus()
      }}
    >
      <LeftEnhancer {...abilities} />
      <div className='flex flex-col flex-1'>
        <TopEnhancer {...abilities} />
        {component()}
        <BottomEnhancer {...abilities} />
      </div>
      <RightEnhancer {...abilities} />
    </div>
  )
}

export default forwardRef(Input)
