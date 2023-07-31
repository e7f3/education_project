import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/test/storybook-avatar.jpg'
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ProfileCard } from './ProfileCard'

export default {
  title: 'enteties/Profile/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Empty = Template.bind({})
Empty.args = {
  readonly: false,
}

export const Default = Template.bind({})
Default.args = {
  data: {
    firstname: 'John',
    lastname: 'Smith',
    username: 'user',
    age: 22,

    country: Country.POLAND,
    city: 'Wrocław',
    avatar,
  },
  readonly: false,
}

export const Readonly = Template.bind({})
Readonly.args = {
  data: {
    firstname: 'John',
    lastname: 'Smith',
    username: 'user',
    age: 22,

    country: Country.POLAND,
    city: 'Wrocław',
    avatar,
  },
  readonly: true,
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  data: {
    firstname: 'John',
    lastname: 'Smith',
    username: 'user',
    age: 22,

    country: Country.POLAND,
    city: 'Wrocław',
    avatar,
  },
  readonly: false,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const Error = Template.bind({})
Error.args = {
  error: 'error',
}
