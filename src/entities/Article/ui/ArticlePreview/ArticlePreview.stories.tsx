import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from 'entities/Article/model/types/article'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticlePreview } from './ArticlePreview'

const data: Article = {
  id: '1',
  title: 'Nicks boots.',
  subtitle: 'Why do I love them.',
  type: [ArticleType.STYLE, ArticleType.HISTORY, ArticleType.CRAFTSMANSHIP],
  image:
    'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
  views: 100,
  createdAt: '09.07.2023',
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'History',
      paragraphs: [
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      title: 'Nicks boots.',
      src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'History',
      paragraphs: [
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
      ],
    },
  ],
}

export default {
  title: 'entities/Article/ArticlePreview',
  component: ArticlePreview,
  argTypes: {},
  args: {
    article: data,
  },
} as ComponentMeta<typeof ArticlePreview>

const Template: ComponentStory<typeof ArticlePreview> = (args) => (
  <ArticlePreview {...args} />
)

export const DefaultGrid = Template.bind({})
DefaultGrid.args = {
  view: ArticleView.GRID,
}
DefaultGrid.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]

export const DefaultList = Template.bind({})
DefaultList.args = {
  view: ArticleView.LIST,
}
DefaultList.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]

export const DarkThemeGrid = Template.bind({})
DarkThemeGrid.args = {
  view: ArticleView.GRID,
}
DarkThemeGrid.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.DARK),
]

export const DarkThemeList = Template.bind({})
DarkThemeList.args = {
  view: ArticleView.LIST,
}
DarkThemeList.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.DARK),
]

export const ColorfulThemeGrid = Template.bind({})
ColorfulThemeGrid.args = {
  view: ArticleView.GRID,
}
ColorfulThemeGrid.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.COLORFUL),
]

export const ColorfulThemeList = Template.bind({})
ColorfulThemeList.args = {
  view: ArticleView.LIST,
}
ColorfulThemeList.decorators = [
  FlexDecorator(FlexDecoratorVariant.CENTERED),
  ThemeDecorator(Theme.COLORFUL),
]
