import { TextareaFunctions, TextareaProps } from './textarea/Textarea.Definition'
import { TextboxFunctions, TextboxProps } from './textbox/Textbox.Definition'

import React from 'react'
import Textarea from './textarea/Textarea'
import Textbox from './textbox/Textbox'

type InputTextbox = { type: 'textbox' } & TextboxProps

type InputTextarea = { type: 'textarea' } & TextareaProps

export type InputProps = InputTextbox | InputTextarea

export type InputFunctions = TextboxFunctions | TextareaFunctions

export type InputReference = React.ElementRef<typeof Textbox | typeof Textarea>
