import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserInitialized, userActions } from 'entities/User'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { AppLoader } from 'widgets/AppLoader/ui/AppLoader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const initialized = useSelector(getUserInitialized)

  useEffect(() => {
    dispatch(userActions.initialAuth())
  }, [dispatch])

  return (
    <Suspense fallback={<AppLoader />}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className='page-content'>
          <Sidebar />
          {initialized && <AppRouter />}
        </div>
      </div>
    </Suspense>
  )
}
