import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Text, TextVariant } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem ipsum dolor sit amet.',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  title: 'Lorem ipsum dolor sit amet.',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
  title: 'Lorem ipsum dolor sit amet.',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.ERROR,
}

export const ErrorDark = Template.bind({})
ErrorDark.args = {
  title: 'Lorem ipsum dolor sit amet.',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.ERROR,
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
