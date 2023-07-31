import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkApiConfig<string>
>('articleDetails/fetchArticleById', async (id, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.get<Article>(`/articles/${id}`)

    if (!response?.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue('fetchArticleById error')
  }
})
