import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApiConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18nForStorybook'

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'
import { Profile } from '../../types/profileSchema'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkApiConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  try {
    const formData = getProfileFormData(getState())

    const response = await extra.api.put<Profile>('/profile', formData)

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(i18n.t('Fetch error'))
  }
})
