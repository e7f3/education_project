import './styles/index.scss'

import {Link } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

interface Props {}

export const App = ({}: Props) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <AppRouter />
    </div>
  )
}
