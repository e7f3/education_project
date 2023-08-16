import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ThemeToggler } from './ThemeToggler'

export default {
  title: 'widgets/ThemeToggler',
  component: ThemeToggler,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeToggler>

const Template: ComponentStory<typeof ThemeToggler> = (args) => (
  <ThemeToggler {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const DarkTheme = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.args = {}
ColorfulTheme.decorators = [ThemeDecorator(Theme.COLORFUL)]
