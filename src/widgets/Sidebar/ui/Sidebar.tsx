import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import AboutUsIcon from 'shared/assets/icons/about-us.svg'
import CollapseIcon from 'shared/assets/icons/collapse-left.svg'
import MainPageIcon from 'shared/assets/icons/home.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from 'shared/ui/Button/Button'
import { LanguageToggler } from 'widgets/LanguageToggler'
import { ThemeToggler } from 'widgets/ThemeToggler'

import classes from './Sidebar.module.scss'

export interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
      data-testid='sidebar'
    >
      <div className={classes.links}>
        <AppLink
          className={classes.link}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.main}
        >
          <MainPageIcon
            className={classNames(classes.linkIcon, {}, [classes.fill])}
          />
          <span className={classes.linkText}>{t('Main Page')}</span>
        </AppLink>
        <AppLink
          className={classes.link}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.about}
        >
          <AboutUsIcon
            className={classNames(classes.linkIcon, {}, [classes.stroke])}
          />
          <span className={classes.linkText}>{t('About Page')}</span>
        </AppLink>
      </div>
      <Button
        theme={ButtonTheme.DEFAULT}
        variant={ButtonVariant.SQUARE}
        size={ButtonSize.L}
        onClick={onToggle}
        className={classes.collapseButton}
        data-testid='sidebar-collapse-button'
      >
        <CollapseIcon
          className={classNames(
            classes.collapseIcon,
            { [classes.rotate]: collapsed },
            []
          )}
        />
      </Button>
      <div className={classes.togglers}>
        <ThemeToggler />
        <LanguageToggler short={collapsed} />
      </div>
    </div>
  )
}
