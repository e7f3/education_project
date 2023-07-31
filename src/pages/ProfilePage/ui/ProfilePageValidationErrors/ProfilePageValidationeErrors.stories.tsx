import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ProfilePageValidationErrors } from './ProfilePageValidationErrors'

export default {
  title: 'pages/Profile/ProfilePageValidationErrors',
  component: ProfilePageValidationErrors,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePageValidationErrors>

const Template: ComponentStory<typeof ProfilePageValidationErrors> = () => (
  <ProfilePageValidationErrors />
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [FlexDecorator]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [FlexDecorator, ThemeDecorator(Theme.DARK)]
