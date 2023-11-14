import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { View } from 'shared/const/common'

import { ChangeContentView } from './ChangeContentView'

export default {
  title: 'features/ChangeContentView',
  component: ChangeContentView,
  argTypes: {},
  args: {
    view: View.GRID,
  },
} as ComponentMeta<typeof ChangeContentView>

const Template: ComponentStory<typeof ChangeContentView> = (args) => (
  <ChangeContentView {...args} />
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
