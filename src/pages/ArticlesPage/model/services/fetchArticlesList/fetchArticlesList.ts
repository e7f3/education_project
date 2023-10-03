import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkApiConfig<string>
>('ArticlesPage/fetchArticlesList', async (_, thunkApi) => {
  try {
    const { extra } = thunkApi

    const response = await extra.api.get<Article[]>(`/articles`)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    console.log(error)
    return thunkApi.rejectWithValue('Fetch articles list failed')
  }
})
