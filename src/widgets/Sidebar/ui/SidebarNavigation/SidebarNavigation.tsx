import { FC, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './SidebarNavigation.module.scss'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarNavigationProps {
  className?: string
  collapsed: boolean
}

export const SidebarNavigation: FC<SidebarNavigationProps> = memo((props) => {
  const { className, collapsed } = props
  const { pathname } = useLocation()
  const sidebarItems = useSelector(getSidebarItems)

  const navigationLinks = useMemo(() => {
    return sidebarItems.map((item) => {
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
  }, [collapsed, pathname, sidebarItems])

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
