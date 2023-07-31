import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withTranslation } from 'react-i18next'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Sidebar } from './Sidebar'

const SidebarWithTranslation = withTranslation()(Sidebar)

export default {
  title: 'widgets/Sidebar/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarWithTranslation>

const Template: ComponentStory<typeof SidebarWithTranslation> = (args) => {
  return <SidebarWithTranslation {...args} />
}

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
