export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  // Rest
  NOT_FOUND = 'not_found',
}

const paths = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
} as const

export const RoutePath: RoutePathType = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

  // Rest
  [AppRoutes.NOT_FOUND]: '*',
}

export type Path = ObjectValues<typeof paths>
export type RoutePathType = Record<AppRoutes, Path>
