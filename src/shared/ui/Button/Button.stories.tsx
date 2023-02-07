import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ButtonSize, ButtonTheme, ButtonVariant } from './Button'

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
  variant: ButtonVariant.DEFAULT
}

export const Inverted = Template.bind({})
Inverted.args = {
  theme: ButtonTheme.INVERTED,
}

export const InvertedDark = Template.bind({})
InvertedDark.args = {
  theme: ButtonTheme.INVERTED,
}
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const MediumSize = Template.bind({})
MediumSize.args = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.M,
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.L,
}

export const XLargeSize = Template.bind({})
XLargeSize.args = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.XL,
}

export const SquareVariant = Template.bind({})
SquareVariant.args = {
  theme: ButtonTheme.DEFAULT,
  variant: ButtonVariant.SQUARE,
  children: '>'
}
