import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ContentSortBy } from 'shared/types/common'

import { ChangeContentSort } from './ChangeContentSort'

export default {
  title: 'features/ChangeContentSort',
  component: ChangeContentSort,
  argTypes: {},
  args: {
    sort: ContentSortBy.DATE,
  },
} as ComponentMeta<typeof ChangeContentSort>

const Template: ComponentStory<typeof ChangeContentSort> = (args) => (
  <ChangeContentSort {...args} />
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
