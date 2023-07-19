import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { userActions, getUserAuthData } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import classes from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo((props) => {
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
        <Button
          className={classes.NavbarAuthButton}
          theme={ButtonTheme.DEFAULT}
          onClick={onLogout}
        >
          {t('Logout')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        className={classes.NavbarAuthButton}
        theme={ButtonTheme.DEFAULT}
        onClick={toggleAuthModal}
      >
        {t('Auth')}
      </Button>
      {isAuthOpen && (
        <LoginModal isOpen={isAuthOpen} onClose={toggleAuthModal} />
      )}
    </div>
  )
})
