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

import { SpecificArticle } from './SpecificArticle'

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
  title: 'enteties/Article/SpecificArticle',
  component: SpecificArticle,
  argTypes: {},
  args: {
    id: '1',
  },
} as ComponentMeta<typeof SpecificArticle>

const Template: ComponentStory<typeof SpecificArticle> = (args) => (
  <SpecificArticle {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: false,
      data,
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
      isLoading: false,
      error:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, numquam!',
    },
  }),
  FlexDecorator,
]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: false,
      data,
    },
  }),
  ThemeDecorator(Theme.DARK),
  FlexDecorator,
]

export const DarkLoading = Template.bind({})
DarkLoading.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: true,
    },
  }),
  FlexDecorator,
]

export const DarkError = Template.bind({})
DarkError.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: false,
      error:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, numquam!',
    },
  }),
  FlexDecorator,
]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: false,
      data,
    },
  }),
  ThemeDecorator(Theme.COLORFUL),
  FlexDecorator,
]

export const ColorfulLoading = Template.bind({})
ColorfulLoading.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: true,
    },
  }),
  FlexDecorator,
]

export const ColorfulError = Template.bind({})
ColorfulError.decorators = [
  StoreProviderDecorator({
    article: {
      isLoading: false,
      error:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, numquam!',
    },
  }),
  FlexDecorator,
]
