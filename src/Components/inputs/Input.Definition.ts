import { CheckboxFunctions, CheckboxIO, CheckboxProps } from './checkbox/Checkbox.Definition'
import { DateFunctions, DateIO, DateProps } from './date/Date.Definition'
import { ImageFunctions, ImageIO, ImageProps } from './image/Image.Definition'
import { RadioFunctions, RadioIO, RadioProps } from './radio/Radio.Definition'
import { TextareaFunctions, TextareaIO, TextareaProps } from './textarea/Textarea.Definition'
import { TextboxFunctions, TextboxIO, TextboxProps } from './textbox/Textbox.Definition'

import Checkbox from './checkbox/Checkbox'
import Date from './date/Date'
import { Image } from './image'
import Radio from './radio/Radio'
import React from 'react'
import Textarea from './textarea/Textarea'
import Textbox from './textbox/Textbox'

type InputTextbox = { type: 'textbox' } & TextboxProps

type InputTextarea = { type: 'textarea' } & TextareaProps

type InputDate = { type: 'date' } & DateProps

type InputImage = { type: 'image' } & ImageProps

type InputCheckbox = { type: 'checkbox' } & CheckboxProps

type InputRadio = { type: 'radio' } & RadioProps

export type InputProps =
  | InputTextbox
  | InputTextarea
  | InputDate
  | InputImage
  | InputCheckbox
  | InputRadio

export type InputFunctions =
  | TextboxFunctions
  | TextareaFunctions
  | DateFunctions
  | ImageFunctions
  | CheckboxFunctions
  | RadioFunctions

export type InputIO = TextareaIO | TextboxIO | DateIO | ImageIO | CheckboxIO | RadioIO

export type InputReference = React.ElementRef<
  typeof Textbox | typeof Textarea | typeof Date | typeof Image | typeof Checkbox | typeof Radio
>
