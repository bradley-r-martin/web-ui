import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from './Input'
import React from 'react'

export default {
  title: 'Input',
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Textbox = Template.bind({ type: 'textbox' })
export const Textarea = Template.bind({ type: 'textarea' })
export const Richtextarea = Template.bind({ type: 'richtextarea' })
export const Number = Template.bind({ type: 'number' })
export const Currency = Template.bind({ type: 'currency' })
export const Date = Template.bind({ type: 'date' })
export const Datetime = Template.bind({ type: 'datetime' })
export const Time = Template.bind({ type: 'time' })
export const Address = Template.bind({ type: 'address' })
export const Location = Template.bind({ type: 'location' })
export const Coordinates = Template.bind({ type: 'conordinates' })
export const Phone = Template.bind({ type: 'phone' })
export const Timezone = Template.bind({ type: 'timezone' })
export const Password = Template.bind({ type: 'password' })
export const Pin = Template.bind({ type: 'pin' })
export const Image = Template.bind({ type: 'image' })
export const File = Template.bind({ type: 'file' })
export const Radio = Template.bind({ type: 'radio' })
export const Checkbox = Template.bind({ type: 'checkbox' })
export const Switch = Template.bind({ type: 'switch' })
export const Slider = Template.bind({ type: 'slider' })
export const Select = Template.bind({ type: 'select' })
export const Search = Template.bind({ type: 'search' })
export const Transfer = Template.bind({ type: 'transfer' })
export const Editor = Template.bind({ type: 'editor' })
export const Properties = Template.bind({ type: 'properties' })
