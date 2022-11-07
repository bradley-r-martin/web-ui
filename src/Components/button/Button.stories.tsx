import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './Button'
import React from 'react'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
