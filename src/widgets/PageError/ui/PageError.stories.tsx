import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { PageError } from './PageError'

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = () => <PageError />

export const Default = Template.bind({})
Default.args = {}

export const DarkTheme = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.args = {}
ColorfulTheme.decorators = [ThemeDecorator(Theme.COLORFUL)]
