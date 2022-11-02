import classes from './ThemeToggler.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTheme } from 'app/providers/ThemeProvider'
import DayNight from 'shared/assets/icons/day_night.svg'

export interface ThemeTogglerProps {
  className?: string
}

export const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
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
}
