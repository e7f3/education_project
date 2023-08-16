import { Story } from '@storybook/react'

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './ThemeDecorator.module.scss'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={classNames('app', {}, [classes.ThemeDecorator, theme])}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  )
