import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleCommentsSchema } from '../types/articleCommentsSchema'

const articleCommentsAdapter = createEntityAdapter<Comment>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment) => comment.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

const articleCommentsSlice = createSlice({
  name: 'specificArticleComments',
  initialState: articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    commentAdded: articleCommentsAdapter.addOne,
    commentsReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      articleCommentsAdapter.setAll(state, action.payload.books)
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false
        articleCommentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const getArticleComments =
  articleCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments || articleCommentsAdapter.getInitialState()
  )

export const { reducer: articleCommentsReducer } = articleCommentsSlice

export const { actions: articleCommentsActions } = articleCommentsSlice
