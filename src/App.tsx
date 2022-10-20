import './styles/index.scss'

import { Routes, Route } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'

interface Props {}

export const App = ({}: Props) => {
  const { theme, toggleTheme } = useTheme()

  console.log(classNames('test', { test1: true, test2: false }, ['test3']))

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
