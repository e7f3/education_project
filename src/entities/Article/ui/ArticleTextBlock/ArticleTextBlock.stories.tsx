import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  ArticleBlockText,
  ArticleBlockType,
} from 'entities/Article/model/types/article'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleTextBlock } from './ArticleTextBlock'

const block: ArticleBlockText = {
  id: '1',
  type: ArticleBlockType.TEXT,
  title: 'About Nick’s Handmade Boots',
  paragraphs: [
    'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
    'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
    'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
  ],
}

export default {
  title: 'entities/Article/ArticleTextBlock',
  component: ArticleTextBlock,
  argTypes: {},
  args: {
    block,
  },
} as ComponentMeta<typeof ArticleTextBlock>

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => (
  <ArticleTextBlock {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
  ThemeDecorator(Theme.LIGHT),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [
  ThemeDecorator(Theme.DARK),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]

export const AltTheme = Template.bind({})
AltTheme.decorators = [
  ThemeDecorator(Theme.COLORFUL),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]
