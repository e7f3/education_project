import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'

import { CommentsSchema } from '../types/commentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment) => comment.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState<CommentsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    commentAdded: commentsAdapter.addOne,
    commentsReceived(state, action: PayloadAction<Comment[]>) {
      // Or, call them as "mutating" helpers in a case reducer
      commentsAdapter.setAll(state, action.payload)
    },
  },
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder
  //     .addCase(fetchCommentsByArticleId.pending, (state, action) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
  //       state.isLoading = false
  //       commentsAdapter.setAll(state, action.payload)
  //     })
  //     .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // },
})

export const getComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.comments || commentsAdapter.getInitialState()
)

export const { reducer: commentsReducer } = commentsSlice

export const { actions: commentsActions } = commentsSlice
