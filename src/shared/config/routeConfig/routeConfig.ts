export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  SPECIFIC_ARTICLE = 'specific_article',

  // Rest
  NOT_FOUND = 'not_found',
}

// const paths = {
//   [AppRoutes.MAIN]: '/',
//   [AppRoutes.ABOUT]: '/about',
//   [AppRoutes.PROFILE]: '/profile/:id',
//   [AppRoutes.ARTICLES]: '/articles',
//   [AppRoutes.SPECIFIC_ARTICLE]: '/articles/:id',
//   [AppRoutes.NOT_FOUND]: '*',
// } as const

export const RoutePath: RoutePathType = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.SPECIFIC_ARTICLE]: '/articles/', // :id

  // Rest
  [AppRoutes.NOT_FOUND]: '*',
}

// export type Path = ObjectValues<typeof paths>
export type RoutePathType = Record<AppRoutes, string>
