import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CountrySelect, CountryOption } from './CountrySelect'
import { Country } from '../../model/types/country'

const selectOptions: CountryOption[] = Object.entries(Country).map(
  ([value, content]) => ({ value, content })
)

export default {
  title: 'entities/Country/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: Country.USA,
    options: selectOptions,
    onChange: (value: Country) => {},
  },
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
)

export const Empty = Template.bind({})
Empty.args = { value: undefined }
Empty.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]

export const DefaultReadonly = Template.bind({})
DefaultReadonly.decorators = [FlexDecorator(FlexDecoratorVariant.DEFAULT)]
DefaultReadonly.args = { readonly: true }

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [
  StyleDecorator,
  FlexDecorator(FlexDecoratorVariant.DEFAULT),
  ThemeDecorator(Theme.DARK),
]
