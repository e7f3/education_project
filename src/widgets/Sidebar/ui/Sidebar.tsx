import { FC, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
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
        [className],
      )}
      data-testid='sidebar'
    >
      <Button
        theme={ButtonTheme.DEFAULT}
        onClick={onToggle}
        data-testid='sidebar-collapse-button'
      >
        {t(collapsed ? 'Expand' : 'Collapse')}
      </Button>
      <div className={classes.togglers}>
        <ThemeToggler />
        <LanguageToggler />
      </div>
    </div>
  )
}
