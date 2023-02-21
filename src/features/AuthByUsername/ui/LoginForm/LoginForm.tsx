import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import classes from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <form className={classNames(classes.LoginForm, {}, [className])}>
      <Input placeholder={t('Username')} type='text' />
      <Input placeholder={t('Password')} type='password' />
      <Button className={classes.LoginButton} type='submit'>
        {t('Log in')}
      </Button>
    </form>
  )
}
