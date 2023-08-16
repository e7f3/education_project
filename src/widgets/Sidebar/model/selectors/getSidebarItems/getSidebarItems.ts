import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from 'entities/User'
import AboutUsPageIcon from 'shared/assets/icons/about-us.svg'
import ArticlesPageIcon from 'shared/assets/icons/articles.svg'
import MainPageIcon from 'shared/assets/icons/home.svg'
import ProfilePageIcon from 'shared/assets/icons/profile.svg'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'

import { SidebarItem } from '../../types/items'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: SidebarItem[] = [
    {
      path: RoutePath[AppRoutes.MAIN],
      text: 'Main Page',
      icon: MainPageIcon,
    },
    {
      path: RoutePath[AppRoutes.ABOUT],
      text: 'About Page',
      icon: AboutUsPageIcon,
    },
  ]

  if (userData) {
    sidebarItems.push(
      {
        path: RoutePath[AppRoutes.ARTICLES],
        text: 'Articles Page',
        icon: ArticlesPageIcon,
        authOnly: true,
      },
      {
        path: `${RoutePath[AppRoutes.PROFILE]}${userData.id}`,
        text: 'Profile Page',
        icon: ProfilePageIcon,
        authOnly: true,
      }
    )
  }

  return sidebarItems
})
