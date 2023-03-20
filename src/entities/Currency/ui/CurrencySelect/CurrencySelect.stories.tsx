import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { FlexDecorator } from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CurrencySelect, CurrencyOption } from './CurrencySelect'
import { Currency } from '../../model/types/currency'

const selectOptions: CurrencyOption[] = Object.entries(Currency).map(
  ([value, content]) => ({ value, content })
)

export default {
  title: 'enteties/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: Currency.EUR,
    options: selectOptions,
    onChange: (value: Currency) => {},
  },
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
)

export const Default = Template.bind({})
Default.decorators = [FlexDecorator]

export const DefaultReadonly = Template.bind({})
DefaultReadonly.decorators = [FlexDecorator]
DefaultReadonly.args = { readonly: true }

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [
  StyleDecorator,
  FlexDecorator,
  ThemeDecorator(Theme.DARK),
]
