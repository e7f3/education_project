import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'

import { User } from '../../types/userSchema'

interface FetchUserByIdArgs {
  userId: string
}

export const fetchUserById = createAsyncThunk<
  User,
  FetchUserByIdArgs,
  ThunkApiConfig<string>
>('user/fetchUserById', async (fetchData, thunkApi) => {
  const { extra } = thunkApi
  const response = await extra.api.post(`/getUserById`, fetchData)
  if (!response.data) {
    throw new Error()
  }

  return response.data
})
