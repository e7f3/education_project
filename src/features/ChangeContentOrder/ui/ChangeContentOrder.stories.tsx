import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { ChangeContentOrder } from './ChangeContentOrder'

export default {
  title: 'shared/ChangeContentOrder',
  component: ChangeContentOrder,
  argTypes: {},
} as ComponentMeta<typeof ChangeContentOrder>

const Template: ComponentStory<typeof ChangeContentOrder> = (args) => (
  <ChangeContentOrder {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]
