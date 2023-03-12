import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import classes from './SidebarItem.module.scss'
import { SidebarItemType } from '../../model/items'

export interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  return (
    <AppLink
      className={classNames(
        classes.link,
        { [classes.collapsed]: collapsed },
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
