import { RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
}
