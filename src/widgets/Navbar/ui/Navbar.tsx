import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

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
      <Modal isOpen={isAuthOpen} onClose={toggleAuthModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        pariatur iusto, exercitationem corporis id veniam qui aspernatur
        accusamus molestias sint?
      </Modal>
    </div>
  )
}
