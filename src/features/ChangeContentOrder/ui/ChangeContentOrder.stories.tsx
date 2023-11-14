import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ContentOrder } from 'shared/types/common'

import { ChangeContentOrder } from './ChangeContentOrder'

export default {
  title: 'features/ChangeContentOrder',
  component: ChangeContentOrder,
  argTypes: {},
  args: {
    order: ContentOrder.DESC,
  },
} as ComponentMeta<typeof ChangeContentOrder>

const Template: ComponentStory<typeof ChangeContentOrder> = (args) => (
  <ChangeContentOrder {...args} />
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
