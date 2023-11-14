import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { SelectContentTags } from './SelectContentTags'

export default {
  title: 'features/SelectContentTags',
  component: SelectContentTags,
  argTypes: {},
  args: {
    tags: [
      {
        value: 'CULTURE',
        selected: true,
        content: 'CULTURE',
      },
      {
        value: 'CRAFTSMANSHIP',
        selected: true,
        content: 'CRAFTSMANSHIP',
      },
      {
        value: 'STYLE',
        selected: true,
        content: 'STYLE',
      },
    ],
  },
} as ComponentMeta<typeof SelectContentTags>

const Template: ComponentStory<typeof SelectContentTags> = (args) => (
  <SelectContentTags {...args} />
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
