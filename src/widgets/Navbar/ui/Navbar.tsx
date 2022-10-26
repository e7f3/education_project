import classes from './Navbar.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ToggleTheme } from 'widgets/ToggleTheme/ui/ToggleTheme'

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <ToggleTheme />
      <div className={classes.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>
          {'Main Page'}
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
          {'About Page'}
        </AppLink>
      </div>
    </div>
  )
}
