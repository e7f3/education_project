import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CurrencySelect, CurrencyOption } from './CurrencySelect'
import { Currency } from '../../model/types/currency'

const selectOptions: CurrencyOption[] = Object.entries(Currency).map(
  ([value, content]) => ({ value, content })
)

export default {
  title: 'entities/Currency/CurrencySelect',
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
