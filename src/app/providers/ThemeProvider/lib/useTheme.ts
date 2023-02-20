import { useContext, useEffect } from 'react'

import {
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from './ThemesContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    const appTheme =
      localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? DEFAULT_THEME
    document.body.className = appTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme(newTheme)
    document.body.className = newTheme
  }
  return {
    theme,
    toggleTheme,
  }
}
