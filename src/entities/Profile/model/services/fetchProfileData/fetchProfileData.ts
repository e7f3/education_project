import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import { FetchProfileError, Profile } from '../../types/profileSchema'

interface FetchProfileDataArgs {
  userId: string
}

export const fetchProfileData = createAsyncThunk<
  Profile,
  FetchProfileDataArgs,
  ThunkApiConfig<FetchProfileError>
>('profile/fetchProfileData', async (fetchData, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.post<Profile>(
      '/getUserProfileById',
      fetchData
    )

    if (!response?.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(FetchProfileError.FETCH_SERVER_ERROR)
  }
})
