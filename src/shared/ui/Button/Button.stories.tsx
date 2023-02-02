import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Text',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Clean = Template.bind({})
Clean.args = {
  theme: ButtonTheme.CLEAN,
}

export const Default = Template.bind({})
Default.args = {
  theme: ButtonTheme.DEFAULT,
}

export const Outlined = Template.bind({})
Outlined.args = {
  theme: ButtonTheme.OUTLINED,
}

export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
  theme: ButtonTheme.OUTLINED,
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
