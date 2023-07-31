import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  Article,
  ArticleBlockType,
  ArticleType,
} from 'entities/Article/model/types/article'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleHeader } from './ArticleHeader'

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
  title: 'enteties/Article/ArticleHeader',
  component: ArticleHeader,
  argTypes: {},
  args: {
    data,
  },
} as ComponentMeta<typeof ArticleHeader>

const Template: ComponentStory<typeof ArticleHeader> = (args) => (
  <ArticleHeader {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(Theme.DARK), FlexDecorator]

export const AltTheme = Template.bind({})
AltTheme.decorators = [ThemeDecorator(Theme.COLORFUL), FlexDecorator]
