import { ComponentMeta, ComponentStory } from '@storybook/react'

import Dictation from '../Components/enhancers/dictation/Dictation'
import Input from '../Components/inputs/Input'
import React from 'react'
import Textbox from '../Components/inputs/textbox/Textbox'

export default {
  title: 'Input/Textbox',
  component: Textbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'transparent'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Textbox>

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />

const InputComponent: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Filled = InputComponent.bind({})
Filled.args = {
  type: 'textbox',
  variant: 'filled',
}

export const DictationEnhancer = InputComponent.bind({})
DictationEnhancer.args = {
  type: 'textbox',
  enhancers: {
    right: Dictation,
  },
}

export const AppendInput = InputComponent.bind({})
AppendInput.args = {
  type: 'textbox',
  className: 'text-right',
  enhancers: {
    right: () => {
      return <>@company-email.com</>
    },
  },
}

export const PrependInput = InputComponent.bind({})
PrependInput.args = {
  type: 'textbox',
  enhancers: {
    left: () => {
      return <>https://</>
    },
  },
}

export const PrependAndAppendInput = InputComponent.bind({})
PrependAndAppendInput.args = {
  type: 'textbox',
  enhancers: {
    left: () => {
      return <>https://</>
    },
    right: () => {
      return <>.com.au</>
    },
  },
}
