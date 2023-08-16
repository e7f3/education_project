import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  ArticleBlockImage,
  ArticleBlockType,
} from 'entities/Article/model/types/article'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleImageBlock } from './ArticleImageBlock'

const block: ArticleBlockImage = {
  type: ArticleBlockType.IMAGE,
  src: 'https://cdn.nicksboots.com/media/wysiwyg/Luke_Boot_1.jpeg',
  title: 'About Nick’s Handmade Boots',
  id: '1',
}

export default {
  title: 'enteties/Article/ArticleImageBlock',
  component: ArticleImageBlock,
  argTypes: {},
  args: {
    block,
  },
} as ComponentMeta<typeof ArticleImageBlock>

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => (
  <ArticleImageBlock {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [
  ThemeDecorator(Theme.DARK),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.decorators = [
  ThemeDecorator(Theme.COLORFUL),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]
