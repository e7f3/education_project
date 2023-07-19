import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import SpecificArticlePage from './SpecificArticlePage'

export default {
  title: 'pages/SpecificArticlePage',
  component: SpecificArticlePage,
  argTypes: {},
} as ComponentMeta<typeof SpecificArticlePage>

const Template: ComponentStory<typeof SpecificArticlePage> = (args) => (
  <SpecificArticlePage {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
