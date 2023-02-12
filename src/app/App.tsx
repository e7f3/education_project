import { Suspense, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { AppLoader } from 'widgets/AppLoader/ui/AppLoader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

export const App = () => {
  const { theme } = useTheme()

  return (
    <Suspense fallback={<AppLoader />}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className='page-content' role='button'>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}
