import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ArticleTextBlock } from './ArticleTextBlock'

export default {
  title: 'shared/ArticleTextBlock',
  component: ArticleTextBlock,
  argTypes: {},
} as ComponentMeta<typeof ArticleTextBlock>

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => (
  <ArticleTextBlock {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
