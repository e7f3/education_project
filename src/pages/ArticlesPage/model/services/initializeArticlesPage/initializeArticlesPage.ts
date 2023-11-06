import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'

import { getArticlesInitialized } from '../../selectors/getArticlesInitialized/getArticlesInitialized'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initializeArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkApiConfig<string>
>('ArticlesPage/initializeArticlesPage', async (_, thunkApi) => {
  try {
    const { dispatch, getState } = thunkApi
    const initialized = getArticlesInitialized(getState())

    if (!initialized) {
      dispatch(articlesPageActions.initState())
      dispatch(
        fetchArticlesList({
          page: 1,
        })
      )
    }
  } catch (error) {
    console.log(error)
    thunkApi.rejectWithValue('Fetch articles list failed')
  }
})
