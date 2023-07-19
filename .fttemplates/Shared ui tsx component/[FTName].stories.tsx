import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { [FTName] } from './[FTName]'

export default {
  title: 'shared/[FTName]',
  component: [FTName],
  argTypes: {
  },
} as ComponentMeta<typeof [FTName]>

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] {...args} />

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]

