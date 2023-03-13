import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApiConfig } from 'app/providers/StoreProvider'
import { User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18nForStorybook'
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage'

interface LoginByUsernameArgs {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameArgs,
  ThunkApiConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.post<User>('/login/', authData)

    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data))
    dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(i18n.t('Invalid auth'))
  }
})
