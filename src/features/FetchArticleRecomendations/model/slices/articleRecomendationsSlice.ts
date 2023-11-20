import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations'
import { ArticleRecomendationsSchema } from '../types/articleRecomendations'

const articleRecomendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
  // Was not working with sort on the server side
  // sortComparer: (a, b) => a.id.localeCompare(b.id),
})

const articleRecomendationsSlice = createSlice({
  name: 'articleRecomendations',
  initialState:
    articleRecomendationsAdapter.getInitialState<ArticleRecomendationsSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {
    articleAdded: articleRecomendationsAdapter.addOne,
    articlesReceived(state, action: PayloadAction<Article[]>) {
      articleRecomendationsAdapter.setAll(state, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, action) => {
        state.isLoading = false
        articleRecomendationsAdapter.addMany(state, action.payload)
      })
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const articleRecomendationsSelectors =
  articleRecomendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleRecomendations ||
      articleRecomendationsAdapter.getInitialState()
  )

export const { reducer: articleRecomendationsReducer } =
  articleRecomendationsSlice
export const { actions: articleRecomendationsActions } =
  articleRecomendationsSlice
