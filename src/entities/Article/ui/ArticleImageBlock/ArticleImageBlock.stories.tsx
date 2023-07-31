import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleImageBlock } from './ArticleImageBlock'

export default {
  title: 'enteties/Article/ArticleImageBlock',
  component: ArticleImageBlock,
  argTypes: {},
  args: {
    src: 'https://cdn.nicksboots.com/media/wysiwyg/Luke_Boot_1.jpeg',
    title: 'About Nick’s Handmade Boots',
  },
} as ComponentMeta<typeof ArticleImageBlock>

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => (
  <ArticleImageBlock {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(Theme.DARK), FlexDecorator]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.decorators = [ThemeDecorator(Theme.COLORFUL), FlexDecorator]
