import { Meta, StoryObj } from '@storybook/react'

import Hero from '.'

export default {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Dark: StoryObj = {
  args: {
    className: 'invert',
    title: 'title dark',
    description: 'description dark'
  }
}
