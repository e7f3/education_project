import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './LoginForm.module.scss'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions } from '../../model/slices/loginSlice'

export interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onPasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <form className={classNames(classes.LoginForm, {}, [className])}>
      <Text title={t('Auth form')} />
      {error && <Text variant={TextVariant.ERROR} text={error} />}
      <Input
        placeholder={t('Username')}
        type='text'
        onChange={onUsernameChange}
        value={username}
      />
      <Input
        placeholder={t('Password')}
        type='password'
        onChange={onPasswordChange}
        value={password}
      />
      <Button
        className={classes.LoginButton}
        type='button'
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Log in')}
      </Button>
    </form>
  )
})
