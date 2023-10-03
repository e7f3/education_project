import { EntityAdapter, createEntityAdapter } from '@reduxjs/toolkit'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  Article,
  ArticleBlockType,
  ArticleType,
} from 'entities/Article/model/types/article'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import ArticlesPage from './ArticlesPage'

const articles: Article[] = [
  {
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
  },
  {
    id: '2',
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
  },
  {
    id: '3',
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
  },
]

const entityAdapter = createEntityAdapter<Article>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (article) => article.id,
  // Keep the 'all IDs' array sorted based on book titles
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {},
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
  StoreProviderDecorator({
    articlesList: entityAdapter.getInitialState({
      isLoading: false,
      error: undefined,
      ids: ['1', '2', '3'],
      entities: articles.reduce(
        (acc, article) => ({ ...acc, [article.id]: article }),
        {}
      ),
    }),
  }),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
  ThemeDecorator(Theme.LIGHT),
]
