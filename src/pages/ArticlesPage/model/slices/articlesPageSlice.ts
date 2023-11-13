import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleType } from 'entities/Article'
import { View } from 'shared/const/common'
import { LOCALSTORAGE_ARTICLE_VIEW_KEY } from 'shared/const/localstorage'
import { ContentOrder, ContentSortBy } from 'shared/types/common'

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/articlesPageSchema'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
  // Was not working with sort on the server side
  // sortComparer: (a, b) => a.id.localeCompare(b.id),
})

const articlesPageSlice = createSlice({
  name: 'articlesList',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    limit: 5,
    hasMore: true,
    _initialized: false,
    view: View.LIST,
    search: '',
    order: ContentOrder.ASC,
    sort: ContentSortBy.DATE,
    types: {
      [ArticleType.STYLE]: true,
      [ArticleType.HISTORY]: true,
      [ArticleType.CRAFTSMANSHIP]: true,
      [ArticleType.NEWS]: true,
      [ArticleType.CULTURE]: true,
      [ArticleType.PEOPLE]: true,
      [ArticleType.TRAVEL]: true,
    },
  }),
  reducers: {
    articleAdded: articlesAdapter.addOne,
    articlesReceived(state, action: PayloadAction<Article[]>) {
      articlesAdapter.setAll(state, action.payload)
    },
    initState: (state) => {
      const view =
        (localStorage.getItem(LOCALSTORAGE_ARTICLE_VIEW_KEY) as View) ||
        View.LIST
      state.view = view
      state.limit = view === View.LIST ? 5 : 9
      state._initialized = true
    },
    setView: (state, action: PayloadAction<View>) => {
      state.view = action.payload
      state.limit = action.payload === View.LIST ? 5 : 9
      localStorage.setItem(LOCALSTORAGE_ARTICLE_VIEW_KEY, action.payload)
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<ContentOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ContentSortBy>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    toggleType: (state, action: PayloadAction<ArticleType>) => {
      state.types[action.payload] = !state.types[action.payload]
    },
    initTypes: (state, action: PayloadAction<ArticleType[]>) => {
      action.payload.forEach((type) => {
        state.types[type] = true
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg.replaceExisting) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        const hasMore = action.payload.length >= state.limit
        state.hasMore = hasMore
        state.isLoading = false

        if (action.meta.arg.replaceExisting) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
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
