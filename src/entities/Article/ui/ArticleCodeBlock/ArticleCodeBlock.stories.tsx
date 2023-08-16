import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ArticleBlockType } from 'entities/Article/model/types/article'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleCodeBlock } from './ArticleCodeBlock'

export default {
  title: 'enteties/Article/ArticleCodeBlock',
  component: ArticleCodeBlock,
  argTypes: {},
  args: {
    block: {
      code: `import { ComponentStory, ComponentMeta } from '@storybook/react'
              const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
                <ArticleCodeBlock {...args} />
              )`,
      type: ArticleBlockType.CODE,
      id: '1',
    },
  },
} as ComponentMeta<typeof ArticleCodeBlock>

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
  <ArticleCodeBlock {...args} />
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

export const ColorfulTheme = Template.bind({})

ColorfulTheme.decorators = [
  ThemeDecorator(Theme.COLORFUL),
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
]
