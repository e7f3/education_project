import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CommentSchema, Comment } from '../types/commentSchema'

const initialState: CommentSchema = {
  comment: undefined,
  isLoading: false,
  error: undefined,
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<Comment>) => {
      state.comment = action.payload
    },
  },
})

export const { actions: commentActions } = commentSlice
export const { reducer: commentReducer } = commentSlice
