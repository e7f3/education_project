import './styles/index.scss'

import { Suspense } from 'react'
import { Routes, Route ,Link } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

interface Props {}

export const App = ({}: Props) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
