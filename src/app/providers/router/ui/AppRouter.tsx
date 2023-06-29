import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'widgets/PageLoader'

import { RequireAuth } from './RequireAuth'
import { AppRouteProps, routeConfig } from '../config/routeConfig'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const { path, element, authOnly = false } = route
    const wrapper = authOnly ? (
      <RequireAuth>
        <Suspense fallback={<PageLoader />}>
          <div className='page'>{element}</div>
        </Suspense>
      </RequireAuth>
    ) : (
      <Suspense fallback={<PageLoader />}>
        <div className='page'>{element}</div>
      </Suspense>
    )
    return <Route key={path} path={path} element={wrapper} />
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
})
