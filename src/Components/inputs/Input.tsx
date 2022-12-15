import { BuilderFunctions, BuilderProps } from './builder/Builder.Definition'
import { CheckboxFunctions, CheckboxIO, CheckboxProps } from './checkbox/Checkbox.Definition'
import { DateFunctions, DateIO, DateProps } from './date/Date.Definition'
import { ImageFunctions, ImageIO, ImageProps } from './image/Image.Definition'
import { InputFunctions, InputProps } from './Input.Definition'
import { RadioFunctions, RadioIO, RadioProps } from './radio/Radio.Definition'
import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { TextareaFunctions, TextareaIO, TextareaProps } from './textarea/Textarea.Definition'
import { TextboxFunctions, TextboxIO, TextboxProps } from './textbox/Textbox.Definition'
import { TransferFunctions, TransferProps } from './transfer/Transfer.Definition'

import Builder from './builder/Builder'
import Checkbox from './checkbox/Checkbox'
import Date from './date/Date'
import { Image } from './image'
import { InputContext } from './Input.Context'
import Radio from './radio/Radio'
import Textarea from './textarea/Textarea'
import Textbox from './textbox/Textbox'
import Transfer from './transfer/Transfer'
import { styleMap } from './Input.Styles'
import { useDisabled } from '../../Hooks/useDisabled/useDisabled'
import { useEnhancer } from '../../Hooks/useEnhancer/useEnhancer'
import { useIO } from '../../Hooks/useIO/useIO'
import { useVocabulary } from '../../Hooks/useVocabulary/useVocabulary'

const Input: React.ForwardRefRenderFunction<InputFunctions, InputProps> = (
  props: InputProps,
  ref,
) => {
  const { type, ...native } = props

  const { enhancers } = props

  const inputRef = useRef<any>()

  function focus() {
    // something
    inputRef?.current?.focus()
  }

  const [input, output] = useIO({ name: props.id, output: props.output, input: props.input })

  // const { words, lines, characters } = useVocabulary({ value: input })

  const { isDisabled, enable, disable } = useDisabled()

  const abilities = { enable, disable, focus }

  function component() {
    switch (type) {
      case 'textbox':
        return (
          <Textbox
            {...(native as TextboxProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<TextboxFunctions>}
          />
        )
      case 'textarea':
        return (
          <Textarea
            {...(native as TextareaProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<TextareaFunctions>}
          />
        )
      case 'image':
        return (
          <Image
            {...(native as ImageProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<ImageFunctions>}
          />
        )
      case 'date':
        return (
          <Date
            {...(native as DateProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<DateFunctions>}
          />
        )
      case 'checkbox':
        return (
          <Checkbox
            {...(native as CheckboxProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<CheckboxFunctions>}
          />
        )
      case 'radio':
        return (
          <Radio
            {...(native as RadioProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<RadioFunctions>}
          />
        )
      case 'transfer':
        return (
          <Transfer
            {...(native as TransferProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<TransferFunctions>}
          />
        )
      case 'builder':
        return (
          <Builder
            {...(native as BuilderProps)}
            {...{ input, output }}
            ref={inputRef as ForwardedRef<BuilderFunctions>}
          />
        )
      default:
        return <>Unknown input type</>
    }
  }

  useImperativeHandle(ref, () => abilities)

  return <InputContext.Provider value={props}>{component()}</InputContext.Provider>
}

export default forwardRef(Input)
