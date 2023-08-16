import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from 'entities/User'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import classes from './SidebarItem.module.scss'
import { SidebarItemType } from '../../model/items'

export interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
  highlited: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed, highlited } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      className={classNames(
        classes.link,
        { [classes.collapsed]: collapsed, [classes.highlited]: highlited },
        []
      )}
      theme={AppLinkTheme.PRIMARY}
      to={item.path}
    >
      <item.icon
        className={classNames(classes.linkIcon, {}, [
          classes.stroke,
          classes.fill,
        ])}
      />
      <span className={classes.linkText}>{t(item.text)}</span>
    </AppLink>
  )
})
