import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { AppLink, AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'Text',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryColorful = Template.bind({})
PrimaryColorful.args = {
  theme: AppLinkTheme.PRIMARY,
}
PrimaryColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const Secondary = Template.bind({})
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryColorful = Template.bind({})
SecondaryColorful.args = {
  theme: AppLinkTheme.SECONDARY,
}
SecondaryColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]
