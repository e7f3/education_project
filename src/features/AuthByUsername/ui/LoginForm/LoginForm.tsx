import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextMode, TextVariant } from 'shared/ui/Text/Text'

import classes from './LoginForm.module.scss'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slices/loginSlice'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className = '', onSuccess } = props
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, username, password, onSuccess])

  return (
    <DynamicReducerLoader reducers={initialReducers}>
      <form className={classNames(classes.LoginForm, {}, [className])}>
        <Text content={t('Auth form')} variant={TextVariant.TITLE} />
        {error && <Text mode={TextMode.ERROR} content={error} />}
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
    </DynamicReducerLoader>
  )
})

export default LoginForm
