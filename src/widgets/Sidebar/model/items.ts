import AboutUsPageIcon from 'shared/assets/icons/about-us.svg'
import ArticlesPageIcon from 'shared/assets/icons/articles.svg'
import MainPageIcon from 'shared/assets/icons/home.svg'
import ProfilePageIcon from 'shared/assets/icons/profile.svg'
import { RoutePath, AppRoutes } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

// const SidebarItemsList: SidebarItemType[] = [
//   { path: '/', text: 'Main Page', icon: MainPageIcon },
//   { path: '/about', text: 'About Page', icon: AboutUsPageIcon },
//   {
//     path: '/articles',
//     text: 'Articles Page',
//     icon: ArticlesPageIcon,
//     authOnly: true,
//   },
//   {
//     path: '/profile',
//     text: 'Profile Page',
//     icon: ProfilePageIcon,
//     authOnly: true,
//   },
// ]

export const createSidebarItems: (profileId?: string) => SidebarItemType[] = (
  profileId
) => {
  const SidebarItemsList: SidebarItemType[] = [
    { path: RoutePath[AppRoutes.MAIN], text: 'Main Page', icon: MainPageIcon },
    {
      path: RoutePath[AppRoutes.ABOUT],
      text: 'About Page',
      icon: AboutUsPageIcon,
    },
    {
      path: RoutePath[AppRoutes.ARTICLES],
      text: 'Articles Page',
      icon: ArticlesPageIcon,
      authOnly: true,
    },
    {
      path: `${RoutePath[AppRoutes.PROFILE]}${profileId}`,
      text: 'Profile Page',
      icon: ProfilePageIcon,
      authOnly: true,
    },
  ]
  return profileId ? SidebarItemsList : SidebarItemsList.slice(0, -1)
}
