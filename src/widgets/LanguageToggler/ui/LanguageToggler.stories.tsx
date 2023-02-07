import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { LanguageToggler } from './LanguageToggler'

export default {
  title: 'widgets/LanguageToggler',
  component: LanguageToggler,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LanguageToggler>

const Template: ComponentStory<typeof LanguageToggler> = (args) => (
  <LanguageToggler {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
