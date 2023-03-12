import { FC, memo, useState } from 'react'

import CollapseIcon from 'shared/assets/icons/collapse-left.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from 'shared/ui/Button/Button'
import { LanguageToggler } from 'widgets/LanguageToggler'
import { ThemeToggler } from 'widgets/ThemeToggler'

import classes from './Sidebar.module.scss'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

export interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props

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
        {SidebarItemsList.map((item) => {
          return (
            <SidebarItem item={item} collapsed={collapsed} key={item.path} />
          )
        })}
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
})
