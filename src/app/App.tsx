import './styles/index.scss'

import { Suspense } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

export const App = () => {
  const { theme } = useTheme()

  return (
    <Suspense fallback="Loading...">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}
