import { useContext, useEffect } from 'react'

import { LOCALSTORAGE_THEME_KEY } from 'shared/const/localstorage'

import { DEFAULT_THEME, Theme, ThemeContext } from './ThemesContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    const appTheme =
      localStorage.getItem(LOCALSTORAGE_THEME_KEY) ?? DEFAULT_THEME
    document.body.className = appTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme)
    setTheme?.(newTheme)
    document.body.className = newTheme
  }
  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  }
}
