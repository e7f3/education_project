import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { App } from './App'

export default {
  title: 'app/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = () => <App />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
