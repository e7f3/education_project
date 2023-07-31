import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ArticleComments } from './ArticleComments'

export default {
  title: 'features/ArticleComments',
  component: ArticleComments,
  argTypes: {},
} as ComponentMeta<typeof ArticleComments>

const Template: ComponentStory<typeof ArticleComments> = (args) => (
  <ArticleComments {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
