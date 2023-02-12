import { Story } from '@storybook/react'

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={classNames('app', {}, [theme])}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  )
