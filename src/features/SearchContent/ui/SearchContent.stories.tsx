import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { SearchContent } from './SearchContent'

export default {
  title: 'features/SearchContent',
  component: SearchContent,
  argTypes: {},
} as ComponentMeta<typeof SearchContent>

const Template: ComponentStory<typeof SearchContent> = (args) => (
  <SearchContent {...args} />
)

export const LightTheme = Template.bind({})
LightTheme.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.DARK),
]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.COLORFUL),
]
