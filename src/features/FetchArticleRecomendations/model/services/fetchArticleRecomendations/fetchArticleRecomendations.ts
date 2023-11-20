import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

export const fetchArticleRecomendations = createAsyncThunk<
  Article[],
  void,
  ThunkApiConfig<string>
>('/FetchArticleRecomendations', async (_, thunkApi) => {
  try {
    const { extra } = thunkApi

    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _limit: 4,
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    console.log(error)
    return thunkApi.rejectWithValue('Fetch article recomendations failed')
  }
})
