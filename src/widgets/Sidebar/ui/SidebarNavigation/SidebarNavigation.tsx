import { FC, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getUserAuthData } from 'entities/User'
import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './SidebarNavigation.module.scss'
import { createSidebarItems } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarNavigationProps {
  className?: string
  collapsed: boolean
}

export const SidebarNavigation: FC<SidebarNavigationProps> = memo((props) => {
  const { className, collapsed } = props
  const { pathname } = useLocation()
  const userData = useSelector(getUserAuthData)

  const navigationLinks = useMemo(() => {
    const SidebarItemsList = userData ? createSidebarItems(userData.id) : []
    return SidebarItemsList.map((item) => {
      const highlited = pathname === item.path
      return (
        <SidebarItem
          item={item}
          collapsed={collapsed}
          highlited={highlited}
          key={item.path}
        />
      )
    })
  }, [collapsed, pathname, userData])

  return (
    <div
      className={classNames(
        classes.SidebarNavigation,
        { [classes.collapsed]: collapsed },
        [className]
      )}
      data-testid='sidebar-navigation'
    >
      {navigationLinks}
    </div>
  )
})
