import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {
  const { children } = props
  const isAuth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return children
}
