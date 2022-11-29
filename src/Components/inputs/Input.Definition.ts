import { DateFunctions, DateProps } from './date/Date.Definition'
import { ImageFunctions, ImageProps } from './image/Image.Definition'
import { TextareaFunctions, TextareaProps } from './textarea/Textarea.Definition'
import { TextboxFunctions, TextboxProps } from './textbox/Textbox.Definition'

import Date from './date/Date'
import { Image } from './image'
import React from 'react'
import Textarea from './textarea/Textarea'
import Textbox from './textbox/Textbox'

type InputTextbox = { type: 'textbox' } & TextboxProps

type InputTextarea = { type: 'textarea' } & TextareaProps

type InputDate = { type: 'date' } & DateProps

type InputImage = { type: 'image' } & ImageProps

export type InputProps = InputTextbox | InputTextarea | InputDate | InputImage

export type InputFunctions = TextboxFunctions | TextareaFunctions | DateFunctions | ImageFunctions

export type InputReference = React.ElementRef<
  typeof Textbox | typeof Textarea | typeof Date | typeof Image
>
