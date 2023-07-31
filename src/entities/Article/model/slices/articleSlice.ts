import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { Article } from '../types/article'
import { ArticleSchema } from '../types/articleSchema'

const initialState: ArticleSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      // fetchArticleById
      .addCase(fetchArticleById.pending, (state) => {
        console.log('pending')

        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          console.log('fulfilled')

          state.isLoading = false
          state.data = action.payload
        }
      )
      .addCase(
        fetchArticleById.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          console.log('rejected')

          state.isLoading = false
          state.error = action.payload
        }
      )
  },
})

// Action creators are generated for each case reducer function
export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice
