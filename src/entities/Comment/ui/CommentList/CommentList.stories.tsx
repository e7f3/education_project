import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { CommentList } from './CommentList'

export default {
  title: 'enteties/Comments/CommentList',
  component: CommentList,
  argTypes: {},
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
