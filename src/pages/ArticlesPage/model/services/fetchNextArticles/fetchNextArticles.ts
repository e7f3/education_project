import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'

import { getArticlesHasMore } from '../../selectors/getArticlesHasMore/getArticlesHasMore'
import { getArticlesIsLoading } from '../../selectors/getArticlesIsLoading/getArticlesIsLoading'
import { getArticlesPageNumber } from '../../selectors/getArticlesPageNumber/getArticlesPageNumber'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticles = createAsyncThunk<
  void,
  void,
  ThunkApiConfig<string>
>('ArticlesPage/fetchNextArticles', async (_, thunkApi) => {
  try {
    const { getState, dispatch } = thunkApi
    const page = getArticlesPageNumber(getState())
    const isLoading = getArticlesIsLoading(getState())
    const hasMore = getArticlesHasMore(getState())

    if (hasMore && !isLoading) {
      await dispatch(fetchArticlesList({ page: page + 1 }))
    }

    return
  } catch (error) {
    console.log(error)
    thunkApi.rejectWithValue('Fetch articles list failed')
  }
})
