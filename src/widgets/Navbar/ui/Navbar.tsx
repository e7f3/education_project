import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import classes from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">
          {t('Main Page')}
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
          {t('About Page')}
        </AppLink>
      </div>
    </div>
  )
}
