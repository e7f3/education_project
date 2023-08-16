import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { NewCommentSchema } from '../types/NewCommentSchema'

const initialState: NewCommentSchema = {
  text: undefined,
  isLoading: false,
  error: undefined,
}

export const newCommentSlice = createSlice({
  name: 'newComment',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(addNewComment.pending, (state) => {
  //     state.error = undefined
  //     state.isLoading = true
  //   })
  //   builder.addCase(addNewComment.fulfilled, (state) => {
  //     state.isLoading = false
  //     state.text = undefined
  //   })
  //   builder.addCase(addNewComment.rejected, (state, action) => {
  //     state.isLoading = false
  //     state.error = action.payload
  //   })
  // },
})

export const { actions: newCommentActions } = newCommentSlice
export const { reducer: newCommentReducer } = newCommentSlice
