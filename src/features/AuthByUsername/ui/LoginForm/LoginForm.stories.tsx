import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import LoginForm from './LoginForm'

export default {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const Default = Template.bind({})

export const Filled = Template.bind({})
Filled.decorators = [
  StoreProviderDecorator({
    loginForm: {
      username: '123',
      password: '123',
    },
  }),
]

export const FilledWithError = Template.bind({})
FilledWithError.decorators = [
  StoreProviderDecorator({
    loginForm: {
      username: '123',
      password: '123',
      error: 'error',
    },
  }),
]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.decorators = [ThemeDecorator(Theme.COLORFUL)]
