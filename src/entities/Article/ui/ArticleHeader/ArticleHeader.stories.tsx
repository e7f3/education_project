import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ArticleHeader } from './ArticleHeader'

export default {
  title: 'shared/ArticleHeader',
  component: ArticleHeader,
  argTypes: {},
} as ComponentMeta<typeof ArticleHeader>

const Template: ComponentStory<typeof ArticleHeader> = (args) => (
  <ArticleHeader {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
