import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/articlesPageSchema'

const articlesAdapter = createEntityAdapter<Article>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (article) => article.id,
  // Keep the 'all IDs' array sorted based on book titles
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

const a = articlesAdapter.getInitialState<ArticlesPageSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
})

const articlesPageSlice = createSlice({
  name: 'articlesList',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    articleAdded: articlesAdapter.addOne,
    articlesReceived(state, action: PayloadAction<Article[]>) {
      // Or, call them as 'mutating' helpers in a case reducer
      articlesAdapter.setAll(state, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        articlesAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const articlesPageSelectors = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesList || articlesAdapter.getInitialState()
)

export const { reducer: articlesPageReducer } = articlesPageSlice
export const { actions: articlesPageActions } = articlesPageSlice
