import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ArticleBody } from './ArticleBody'

export default {
  title: 'shared/ArticleBody',
  component: ArticleBody,
  argTypes: {},
} as ComponentMeta<typeof ArticleBody>

const Template: ComponentStory<typeof ArticleBody> = (args) => (
  <ArticleBody {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
