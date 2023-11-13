import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { SearchContent } from './SearchContent'

export default {
  title: 'shared/SearchContent',
  component: SearchContent,
  argTypes: {},
} as ComponentMeta<typeof SearchContent>

const Template: ComponentStory<typeof SearchContent> = (args) => (
  <SearchContent {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]
