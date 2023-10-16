import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { PageContainer } from './PageContainer'

export default {
  title: 'shared/PageContainer',
  component: PageContainer,
  argTypes: {},
  args: {
    children: 'PageContainer',
  },
} as ComponentMeta<typeof PageContainer>

const Template: ComponentStory<typeof PageContainer> = (args) => (
  <PageContainer {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]
