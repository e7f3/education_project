import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'

export const [FTName] = createAsyncThunk<
  RETURNED_VALUE_TYPE,
  void,
  ThunkApiConfig<string>
>('/[FTName]', async (_, thunkApi) => {
  const { extra, getState } = thunkApi

  const response = await extra.api.get<FETCHED_VALUE_TYPE>(`URL_TAIL`)
  if (!response.data) {
    throw new Error()
  }

  return response.data
})
