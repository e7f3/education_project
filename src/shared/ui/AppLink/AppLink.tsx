import classes from './AppLink.module.scss'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props

  return (
    <Link
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      to={to}
      {...restProps}
    >
      {children}
    </Link>
  )
}
