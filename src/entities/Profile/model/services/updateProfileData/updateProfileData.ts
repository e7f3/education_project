import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApiConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'
import {
  Profile,
  ValidateProfileError,
  UpdateProfileError,
} from '../../types/profileSchema'
import { validateProfileData } from '../validateProfileData/validateProfileData'

interface UpdateProfileDataArgs {
  userId: string
}

export const updateProfileData = createAsyncThunk<
  Profile,
  UpdateProfileDataArgs,
  ThunkApiConfig<ValidateProfileError[] | UpdateProfileError>
>('profile/updateProfileData', async (updateData, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  const formData = getProfileFormData(getState())

  const validationErrors = validateProfileData(formData)

  if (validationErrors && validationErrors.length) {
    return rejectWithValue(validationErrors)
  }
  try {
    const response = await extra.api.put<Profile>(
      `/profiles/${updateData.userId}`,
      formData
    )

    if (!response?.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(UpdateProfileError.FETCH_SERVER_ERROR)
  }
})
