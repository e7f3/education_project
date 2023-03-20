import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApiConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18nForStorybook'

import { Profile } from '../../types/profileSchema'

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkApiConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.get<Profile>('/profile')

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(i18n.t('Fetch error'))
  }
})
