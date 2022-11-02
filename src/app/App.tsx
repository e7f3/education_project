import './styles/index.scss'

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/classNames/classNames'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

interface Props {}

export const App = ({}: Props) => {
  const { theme } = useTheme()

  return (
    <Suspense fallback={'Loading...'}>
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
