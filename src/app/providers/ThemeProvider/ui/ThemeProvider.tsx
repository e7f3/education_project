import { FC, useMemo, useState } from 'react'

import { LOCALSTORAGE_THEME_KEY } from 'shared/const/localstorage'

import { Theme, ThemeContext } from '../lib/ThemesContext'

interface ThemeProviderProps {
  initialTheme?: Theme
}

const defaultTheme =
  (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
