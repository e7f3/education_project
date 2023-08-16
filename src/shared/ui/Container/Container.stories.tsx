import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { Container } from './Container'

export default {
  title: 'shared/Container',
  component: Container,
  argTypes: {},
  args: {
    children: 'Container',
  },
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]
