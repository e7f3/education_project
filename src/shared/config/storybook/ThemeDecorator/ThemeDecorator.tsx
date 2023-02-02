import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <div className={classNames('app', {}, [theme])}>
      <StoryComponent />
    </div>
  )
}
