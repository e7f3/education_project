import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/test/storybook-avatar.jpg'
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import ProfilePage from './ProfilePage'

export default {
  title: 'pages/Profile/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Empty = Template.bind({})
Empty.args = {}

export const Default = Template.bind({})
Default.decorators = [
  StoreProviderDecorator({
    profile: {
      data: {
        firstname: 'John',
        lastname: 'Smith',
        username: 'user',
        age: 22,
        currency: Currency.EUR,
        country: Country.POLAND,
        city: 'Wrocław',
        avatar,
      },
      formData: {
        firstname: 'John',
        lastname: 'Smith',
        username: 'user',
        age: 22,
        currency: Currency.EUR,
        country: Country.POLAND,
        city: 'Wrocław',
        avatar,
      },
      readonly: false,
    },
  }),
]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreProviderDecorator({
    profile: {
      data: {
        firstname: 'John',
        lastname: 'Smith',
        username: 'user',
        age: 22,
        currency: Currency.EUR,
        country: Country.POLAND,
        city: 'Wrocław',
        avatar,
      },
      formData: {
        firstname: 'John',
        lastname: 'Smith',
        username: 'user',
        age: 22,
        currency: Currency.EUR,
        country: Country.POLAND,
        city: 'Wrocław',
        avatar,
      },
      readonly: false,
    },
  }),
]
