import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import AddCommentForm from './AddCommentForm'

export default {
  title: 'features/AddComment/AddCommentForm',
  component: AddCommentForm,
  argTypes: {},
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]

export const Dark = Template.bind({})
Dark.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.DARK),
]

export const Colorful = Template.bind({})
Colorful.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.COLORFUL),
]
