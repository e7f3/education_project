import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { View } from 'shared/const/common'
import { ContentOrder, ContentSortBy } from 'shared/types/common'

import { ContentControls } from './ContentControls'

export default {
  title: 'widgets/ContentControls',
  component: ContentControls,
  argTypes: {},
  args: {
    view: View.LIST,
    sort: ContentSortBy.DATE,
    order: ContentOrder.ASC,
    search: '',
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
} as ComponentMeta<typeof ContentControls>

const Template: ComponentStory<typeof ContentControls> = (args) => (
  <ContentControls {...args} />
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
