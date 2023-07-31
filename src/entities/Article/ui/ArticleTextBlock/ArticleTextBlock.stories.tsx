import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleTextBlock } from './ArticleTextBlock'

export default {
  title: 'enteties/Article/ArticleTextBlock',
  component: ArticleTextBlock,
  argTypes: {},
  args: {
    title: 'About Nick’s Handmade Boots',
    paragraphs: [
      'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
      'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
      'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
    ],
  },
} as ComponentMeta<typeof ArticleTextBlock>

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => (
  <ArticleTextBlock {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(Theme.DARK), FlexDecorator]

export const AltTheme = Template.bind({})
AltTheme.decorators = [ThemeDecorator(Theme.COLORFUL), FlexDecorator]
