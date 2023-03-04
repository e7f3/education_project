import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import LoginForm from './LoginForm'

export default {
  title: 'feature/AuthByUsername/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const Default = Template.bind({})

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
