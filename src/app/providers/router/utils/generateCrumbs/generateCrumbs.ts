import { AppRouteProps } from '../../config/routeConfig'

interface Crumb {
  path: string
  title: string
}

export const generateCrumbs = (route: AppRouteProps): Crumb[] => {
  const { path } = route
  const crumbs: Crumb[] =
    path
      ?.split('/')
      .filter(Boolean)
      .reduce((accumulator, current, index, array) => {
        const crumb: Crumb = {
          path: `/${array.slice(0, index + 1).join('/')}`,
          title: 'test',
        }
        return [...accumulator, crumb]
      }, [] as Crumb[]) || []

  return crumbs
}
