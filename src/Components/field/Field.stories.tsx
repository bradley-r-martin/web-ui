import { ComponentMeta, ComponentStory } from '@storybook/react'

import Field from './Field'
import React from 'react'

export default {
  title: 'Field',
  component: Field,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Field>

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />

export const F = Template.bind({})
F.args = {
  label: 'Label:',
}
