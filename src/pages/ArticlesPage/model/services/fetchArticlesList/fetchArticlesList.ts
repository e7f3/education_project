import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit'

interface FetchArticlesListParams {
  page: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListParams,
  ThunkApiConfig<string>
>('ArticlesPage/fetchArticlesList', async (params, thunkApi) => {
  try {
    const { extra, getState } = thunkApi
    const limit = getArticlesLimit(getState())
    const { page = 1 } = params

    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _limit: limit,
        _page: page,
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    console.log(error)
    return thunkApi.rejectWithValue('Fetch articles list failed')
  }
})
