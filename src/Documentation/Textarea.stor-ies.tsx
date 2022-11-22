import { BookOpenIcon, MicrophoneIcon } from '@heroicons/react/24/outline'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Dictation from '../Components/enhancers/dictation/Dictation'
import Input from '../Components/inputs/Input'
import React from 'react'
import Textarea from '../Components/inputs/textarea/Textarea'
import Vocabulary from '../Components/enhancers/vocabulary/Vocabulary'

export default {
  title: 'Input/Textarea',
  component: Textarea,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['filled', 'outlined', 'transparent'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'filled',
}

const InputComponent: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const DictationEnhancer = InputComponent.bind({})
DictationEnhancer.args = {
  type: 'textarea',
  enhancers: {
    right: Dictation,
  },
}

export const VocabularyEnhancer = InputComponent.bind({})
VocabularyEnhancer.args = {
  type: 'textarea',
  enhancers: {
    bottom: Vocabulary,
  },
}

export const VocabularyDictationEnhancer = InputComponent.bind({})
VocabularyDictationEnhancer.args = {
  type: 'textarea',
  enhancers: {
    right: Dictation,
    bottom: Vocabulary,
  },
}
