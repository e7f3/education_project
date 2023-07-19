import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { Skeleton } from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
