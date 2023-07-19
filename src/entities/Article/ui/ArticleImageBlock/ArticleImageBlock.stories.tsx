import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ArticleImageBlock } from './ArticleImageBlock'

export default {
  title: 'shared/ArticleImageBlock',
  component: ArticleImageBlock,
  argTypes: {},
} as ComponentMeta<typeof ArticleImageBlock>

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => (
  <ArticleImageBlock {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
