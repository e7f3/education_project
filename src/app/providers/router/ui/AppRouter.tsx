import { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { PageLoader } from 'widgets/PageLoader'

import { routeConfig } from '../config/routeConfig'

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter(
        (configValue) => !configValue.authOnly || isAuth
      ),
    [isAuth]
  )
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className='page'>{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
})
