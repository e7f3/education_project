import { addDecorator } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { I18NextDecorator } from 'shared/config/storybook/I18NextDecorator/I18NextDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(RouterDecorator)
addDecorator(StyleDecorator)
addDecorator(I18NextDecorator)
addDecorator(SuspenseDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
