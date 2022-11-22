import { DateFunctions, DateProps } from './date/Date.Definition'
import { TextareaFunctions, TextareaProps } from './textarea/Textarea.Definition'
import { TextboxFunctions, TextboxProps } from './textbox/Textbox.Definition'

import Date from './date/Date'
import React from 'react'
import Textarea from './textarea/Textarea'
import Textbox from './textbox/Textbox'

type InputTextbox = { type: 'textbox' } & TextboxProps

type InputTextarea = { type: 'textarea' } & TextareaProps

type InputDate = { type: 'date' } & DateProps

export type InputProps = InputTextbox | InputTextarea | InputDate

export type InputFunctions = TextboxFunctions | TextareaFunctions | DateFunctions

export type InputReference = React.ElementRef<typeof Textbox | typeof Textarea | typeof Date>
