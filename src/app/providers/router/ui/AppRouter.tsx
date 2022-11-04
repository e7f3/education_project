import { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

import { routeConfig } from '../config/routeConfig'

export const AppRouter = () => (
  <Suspense fallback="loading...">
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
)
