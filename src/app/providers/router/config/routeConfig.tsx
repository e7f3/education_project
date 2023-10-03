import { RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { SpecificArticlePage } from 'pages/SpecificArticlePage'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  name: string
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
    name: 'Home',
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
    name: 'About',
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
    name: 'Profile',
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
    name: 'Articles',
  },
  [AppRoutes.SPECIFIC_ARTICLE]: {
    path: `${RoutePath[AppRoutes.SPECIFIC_ARTICLE]}:id`,
    element: <SpecificArticlePage />,
    authOnly: true,
    name: '..',
  },
  // Rest
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
    name: 'Error',
  },
}
