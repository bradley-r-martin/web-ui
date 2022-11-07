import { ComponentMeta, ComponentStory } from '@storybook/react'

import Form from './Form'
import React from 'react'

export default {
  title: 'Form',
  component: Form,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />

export const F = () => {
  return (
    <>
      Form:
      <Form>
        parent
        <Form disabled inherit>
          Child one
          <Form inherit>Grand child one</Form>
        </Form>
        <Form>Child two</Form>
      </Form>
    </>
  )
}
