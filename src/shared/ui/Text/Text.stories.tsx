import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Text, TextMode, TextVariant } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const DefaultParagraph = Template.bind({})
DefaultParagraph.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
}

export const DefaultTitle = Template.bind({})
DefaultTitle.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.TITLE,
}

export const DefaultSubtitle = Template.bind({})
DefaultSubtitle.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.SUBTITLE,
}

export const DefaultParagraphDark = Template.bind({})
DefaultParagraphDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
}
DefaultParagraphDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorParagraph = Template.bind({})
ErrorParagraph.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  mode: TextMode.ERROR,
}

export const ErrorParagraphDark = Template.bind({})
ErrorParagraphDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  mode: TextMode.ERROR,
}
ErrorParagraphDark.decorators = [ThemeDecorator(Theme.DARK)]
