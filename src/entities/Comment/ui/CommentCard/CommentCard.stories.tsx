import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { CommentCard } from './CommentCard'

export default {
  title: 'shared/CommentCard',
  component: CommentCard,
  argTypes: {},
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
