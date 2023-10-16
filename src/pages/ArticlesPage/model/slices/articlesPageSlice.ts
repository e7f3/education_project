import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { View } from 'shared/const/common'
import { LOCALSTORAGE_ARTICLE_VIEW_KEY } from 'shared/const/localstorage'

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/articlesPageSchema'

const articlesAdapter = createEntityAdapter<Article>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (article) => article.id,
  // Keep the 'all IDs' array sorted based on book titles
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

const articlesPageSlice = createSlice({
  name: 'articlesList',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: View.LIST,
    page: 1,
    limit: 5,
    hasMore: true,
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    articleAdded: articlesAdapter.addOne,
    articlesReceived(state, action: PayloadAction<Article[]>) {
      // Or, call them as 'mutating' helpers in a case reducer
      articlesAdapter.setAll(state, action.payload)
    },
    setView: (state, action: PayloadAction<View>) => {
      state.view = action.payload
      state.limit = action.payload === View.LIST ? 5 : 9
      localStorage.setItem(LOCALSTORAGE_ARTICLE_VIEW_KEY, action.payload)
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const view =
        (localStorage.getItem(LOCALSTORAGE_ARTICLE_VIEW_KEY) as View) ||
        View.LIST
      state.view = view
      state.limit = view === View.LIST ? 5 : 9
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.hasMore = action.payload.length > 0
        state.isLoading = false
        articlesAdapter.addMany(state, action.payload)
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
