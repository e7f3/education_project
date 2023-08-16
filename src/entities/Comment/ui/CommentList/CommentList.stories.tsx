import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { User } from 'entities/User'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CommentList } from './CommentList'
import { Comment } from '../../model/types/comment'

const comments: Comment[] = [
  {
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
  {
    id: '2',
    text: 'some comment',
    date: '01.01.1970',
    user: {
      id: '1',
      username: 'admin',
      avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
      password: '12345678',
    } as User,
  },
  {
    id: '3',
    text: 'some comment',
    date: '01.01.1970',
    user: {
      id: '1',
      username: 'admin',
      avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
      password: '12345678',
    } as User,
  },
]

export default {
  title: 'enteties/Comment/CommentList',
  component: CommentList,
  argTypes: {},
  args: {
    comments,
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
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
