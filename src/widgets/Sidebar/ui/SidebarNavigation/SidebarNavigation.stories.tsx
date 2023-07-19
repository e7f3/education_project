import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { SidebarNavigation } from './SidebarNavigation'

export default {
  title: 'shared/SidebarNavigation',
  component: SidebarNavigation,
  argTypes: {},
} as ComponentMeta<typeof SidebarNavigation>

const Template: ComponentStory<typeof SidebarNavigation> = (args) => (
  <SidebarNavigation {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]
