import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import { FetchProfileError, Profile } from '../../types/profileSchema'

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkApiConfig<FetchProfileError>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.get<Profile>('/profile')

    if (!response?.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(FetchProfileError.FETCH_SERVER_ERROR)
  }
})
