import { FC, memo, useCallback, useState } from 'react'

import CollapseIcon from 'shared/assets/icons/collapse-left.svg'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from 'shared/ui/Button/Button'
import { LanguageToggler } from 'widgets/LanguageToggler'
import { ThemeToggler } from 'widgets/ThemeToggler'

import classes from './Sidebar.module.scss'
import { SidebarNavigation } from '../SidebarNavigation/SidebarNavigation'

export interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(true)

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev)
  }, [])

  return (
    <div
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
      data-testid='sidebar'
    >
      <div className={classes.SidebarContent}>
        <Button
          className={classes.collapseButton}
          theme={ButtonTheme.DEFAULT}
          variant={ButtonVariant.SQUARE}
          size={ButtonSize.L}
          onClick={onToggle}
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
        <SidebarNavigation
          className={classes.navigation}
          collapsed={collapsed}
        />
        <div className={classes.togglers}>
          <ThemeToggler />
          <LanguageToggler short={collapsed} />
        </div>
      </div>
    </div>
  )
})
