import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { SpecificArticle } from './SpecificArticle'

export default {
  title: 'shared/SpecificArticle',
  component: SpecificArticle,
  argTypes: {},
} as ComponentMeta<typeof SpecificArticle>

const Template: ComponentStory<typeof SpecificArticle> = (args) => (
  <SpecificArticle {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
