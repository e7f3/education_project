import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ArticleBlockType } from 'entities/Article/model/types/article'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleCodeBlock } from './ArticleCodeBlock'

export default {
  title: 'enteties/Article/ArticleCodeBlock',
  component: ArticleCodeBlock,
  argTypes: {},
} as ComponentMeta<typeof ArticleCodeBlock>

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
  <ArticleCodeBlock {...args} />
)

export const Default = Template.bind({})
Default.args = {
  block: {
    code: `import { ComponentStory, ComponentMeta } from '@storybook/react'
            const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
              <ArticleCodeBlock {...args} />
            )`,
    type: ArticleBlockType.CODE,
    id: '1',
  },
}
Default.decorators = [FlexDecorator]

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  block: {
    code: `import { ComponentStory, ComponentMeta } from '@storybook/react'
            const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
              <ArticleCodeBlock {...args} />
            )`,
    type: ArticleBlockType.CODE,
    id: '1',
  },
}

DarkTheme.decorators = [ThemeDecorator(Theme.DARK), FlexDecorator]

export const ColorfulTheme = Template.bind({})
ColorfulTheme.args = {
  block: {
    code: `import { ComponentStory, ComponentMeta } from '@storybook/react'
            const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
              <ArticleCodeBlock {...args} />
            )`,
    type: ArticleBlockType.CODE,
    id: '1',
  },
}
ColorfulTheme.decorators = [ThemeDecorator(Theme.COLORFUL), FlexDecorator]
