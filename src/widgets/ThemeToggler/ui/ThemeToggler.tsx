import { FC, memo } from 'react'

import { useTheme } from 'app/providers/ThemeProvider'
import DayNight from 'shared/assets/icons/day_night.svg'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import classes from './ThemeToggler.module.scss'

export interface ThemeTogglerProps {
  className?: string
}

export const ThemeToggler: FC<ThemeTogglerProps> = memo((props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(classes.ToggleTheme, {}, [className])}
      theme={ButtonTheme.CLEAN}
      onClick={toggleTheme}
    >
      <DayNight
        className={classNames(classes.ToggleThemeIcon, {}, [classes[theme]])}
      />
    </Button>
  )
})
