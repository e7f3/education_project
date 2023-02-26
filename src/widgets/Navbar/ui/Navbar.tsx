import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from 'entities/User'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
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
  const userData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const toggleAuthModal = useCallback(() => {
    setIsAuthOpen((prev) => !prev)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userData) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.DEFAULT} onClick={onLogout}>
          {t('Logout')}
        </Button>
      </div>
    )
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
