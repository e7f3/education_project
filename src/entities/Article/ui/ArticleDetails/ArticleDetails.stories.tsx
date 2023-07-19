import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ArticleDetails } from './ArticleDetails'

export default {
  title: 'shared/ArticleDetails',
  component: ArticleDetails,
  argTypes: {},
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
