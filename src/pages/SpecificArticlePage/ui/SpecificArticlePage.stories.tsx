import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  Article,
  ArticleBlockType,
  ArticleType,
} from 'entities/Article/model/types/article'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import SpecificArticlePage from './SpecificArticlePage'

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
  title: 'pages/SpecificArticlePage',
  component: SpecificArticlePage,
  argTypes: {},
  parameters: {
    reactRouter: {
      routePath: '/articles/:id',
      routeParams: {
        id: '1',
      },
    },
  },
} as ComponentMeta<typeof SpecificArticlePage>

const Template: ComponentStory<typeof SpecificArticlePage> = (args) => (
  <SpecificArticlePage {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
  StoreProviderDecorator({
    article: {
      data,
      isLoading: false,
    },
  }),
  FlexDecorator,
]

export const DefaultLoading = Template.bind({})
DefaultLoading.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: true,
    },
  }),
  FlexDecorator,
]

export const DefaultError = Template.bind({})
DefaultError.decorators = [
  StoreProviderDecorator({
    article: {
      error: 'Error',
    },
  }),
  FlexDecorator,
]

export const Dark = Template.bind({})
Dark.decorators = [
  StoreProviderDecorator({
    article: {
      data,
      isLoading: false,
    },
  }),
  FlexDecorator,
  ThemeDecorator(Theme.DARK),
]

export const DarkLoading = Template.bind({})
DarkLoading.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: true,
    },
  }),
  FlexDecorator,
  ThemeDecorator(Theme.DARK),
]

export const DarkError = Template.bind({})
DarkError.decorators = [
  StoreProviderDecorator({
    article: {
      error: 'Error',
    },
  }),
  FlexDecorator,
  ThemeDecorator(Theme.DARK),
]

export const Colorful = Template.bind({})
Colorful.decorators = [
  StoreProviderDecorator({
    article: {
      data,
      isLoading: false,
    },
  }),
  FlexDecorator,
  ThemeDecorator(Theme.COLORFUL),
]

export const ColorfulLoading = Template.bind({})
ColorfulLoading.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: true,
    },
  }),
  FlexDecorator,
  ThemeDecorator(Theme.COLORFUL),
]

export const ColorfulError = Template.bind({})
ColorfulError.decorators = [
  StoreProviderDecorator({
    article: {
      error: 'Error',
    },
  }),
  FlexDecorator,
  ThemeDecorator(Theme.COLORFUL),
]
