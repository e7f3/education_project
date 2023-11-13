import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from 'entities/Article'

import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit'
import { getArticlesOrder } from '../../selectors/getArticlesOrder/getArticlesOrder'
import { getArticlesPageNumber } from '../../selectors/getArticlesPageNumber/getArticlesPageNumber'
import { getArticlesSearch } from '../../selectors/getArticlesSearch/getArticlesSearch'
import { getArticlesSort } from '../../selectors/getArticlesSort/getArticlesSort'
import { getArticlesTypes } from '../../selectors/getArticlesTypes/getArticlesTypes'

interface FetchArticlesListParams {
  replaceExisting?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListParams,
  ThunkApiConfig<string>
>('ArticlesPage/fetchArticlesList', async (_, thunkApi) => {
  try {
    const { extra, getState } = thunkApi
    const limit = getArticlesLimit(getState())
    const page = getArticlesPageNumber(getState())
    const order = getArticlesOrder(getState())
    const sort = getArticlesSort(getState())
    const search = getArticlesSearch(getState())
    const types = getArticlesTypes(getState())
    const typesArray = Object.entries(types)
      .filter(([, value]) => value)
      .map(([key]) => key as ArticleType)

    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _limit: limit,
        _page: page,
        _order: order,
        _sort: sort,
        q: search,
        types: typesArray.join(','),
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
