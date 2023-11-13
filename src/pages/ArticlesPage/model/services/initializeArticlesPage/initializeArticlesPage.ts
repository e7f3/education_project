import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities/Article'
import { isPartOfEnum } from 'shared/lib/utils/isPartOfEnum/isPartOfEnum'
import { isString } from 'shared/lib/utils/isString/isString'
import { ContentOrder, ContentSortBy } from 'shared/types/common'

import { getArticlesInitialized } from '../../selectors/getArticlesInitialized/getArticlesInitialized'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initializeArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkApiConfig<string>
>('ArticlesPage/initializeArticlesPage', async (searchParams, thunkApi) => {
  try {
    const { dispatch, getState } = thunkApi
    const initialized = getArticlesInitialized(getState())

    const order = searchParams.get('order')
    const sort = searchParams.get('sort')
    const search = searchParams.get('search')
    const types = searchParams.get('type')

    if (isString(order) && isPartOfEnum(order, ContentOrder)) {
      dispatch(articlesPageActions.setOrder(order as ContentOrder))
    }
    if (isString(sort) && isPartOfEnum(sort, ContentSortBy)) {
      dispatch(articlesPageActions.setSort(sort as ContentSortBy))
    }
    if (isString(search)) {
      dispatch(articlesPageActions.setSearch(search))
    }
    if (isString(types)) {
      const typesArray = types.split(',')
      dispatch(articlesPageActions.initTypes(typesArray as ArticleType[]))
    }

    if (!initialized) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  } catch (error) {
    console.log(error)
    thunkApi.rejectWithValue('Fetch articles list failed')
  }
})
