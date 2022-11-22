import { ComponentMeta, ComponentStory } from '@storybook/react'

import Date from '../Components/inputs/date/Date'
import Dictation from '../Components/enhancers/dictation/Dictation'
import Input from '../Components/inputs/Input'
import React from 'react'

export default {
  title: 'Input/Date',
  component: Date,
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
} as ComponentMeta<typeof Date>

const Template: ComponentStory<typeof Date> = (args) => <Date {...args} />

const InputComponent: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Filled = () => {
  return (
    <div className='flex'>
      <span className='w-96'>
        <Input type='date' />
      </span>
    </div>
  )
}
