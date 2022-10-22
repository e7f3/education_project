import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'

interface Props {}

export const AppRouter = ({}: Props) => {
  return (
    <Suspense fallback={'loading...'}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />
        })}
      </Routes>
    </Suspense>
  )
}
