import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Navbar } from './Navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DarkTheme = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.args = {}
ColorfulTheme.decorators = [ThemeDecorator(Theme.COLORFUL)]
