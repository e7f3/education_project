import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ContentControls } from './ContentControls'

export default {
  title: 'shared/ContentControls',
  component: ContentControls,
  argTypes: {},
} as ComponentMeta<typeof ContentControls>

const Template: ComponentStory<typeof ContentControls> = (args) => (
  <ContentControls {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]
