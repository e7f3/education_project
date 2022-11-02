import classes from './Sidebar.module.scss'
import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeToggler } from 'widgets/ThemeToggler'
import { LanguageToggler } from 'widgets/LanguageToggler'
import { useTranslation } from 'react-i18next'

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
    >
      <Button theme={ButtonTheme.DEFAULT} onClick={onToggle}>
        {t(collapsed ? 'Expand' : 'Collapse')}
      </Button>
      <div className={classes.togglers}>
        <ThemeToggler />
        <LanguageToggler />
      </div>
    </div>
  )
}
