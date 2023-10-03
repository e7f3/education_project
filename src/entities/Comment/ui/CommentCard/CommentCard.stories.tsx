import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { User } from 'entities/User'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CommentCard } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {},
  args: {
    comment: {
      id: '1',
      text: 'some comment',
      date: '01.01.1970',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
        password: '12345678',
      } as User,
    },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
  ThemeDecorator(Theme.LIGHT),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [
  ThemeDecorator(Theme.DARK),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.decorators = [
  ThemeDecorator(Theme.COLORFUL),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]
