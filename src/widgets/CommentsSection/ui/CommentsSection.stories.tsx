import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CommentsSection } from './CommentsSection'

export default {
  title: 'widgets/CommentsSection',
  component: CommentsSection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentsSection>

const Template: ComponentStory<typeof CommentsSection> = (args) => (
  <CommentsSection {...args} />
)

export const LightTheme = Template.bind({})
LightTheme.args = {}

export const DarkTheme = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.args = {}
ColorfulTheme.decorators = [ThemeDecorator(Theme.COLORFUL)]
