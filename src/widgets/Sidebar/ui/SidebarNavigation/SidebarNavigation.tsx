import { FC, memo, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './SidebarNavigation.module.scss'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarNavigationProps {
  className?: string
  collapsed: boolean
}

export const SidebarNavigation: FC<SidebarNavigationProps> = memo((props) => {
  const { className, collapsed } = props
  const { pathname } = useLocation()

  const navigationLinks = useMemo(() => {
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
  }, [collapsed, pathname])

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
