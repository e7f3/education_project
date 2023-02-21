import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/AuthByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import classes from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const toggleAuthModal = () => {
    setIsAuthOpen((prev) => !prev)
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.DEFAULT} onClick={toggleAuthModal}>
        {t('Auth')}
      </Button>
      <LoginModal isOpen={isAuthOpen} onClose={toggleAuthModal} />
    </div>
  )
}
