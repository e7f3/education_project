import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { commentsActions } from 'features/FetchComments/model/slices/commentsSlice'

export const getFetcher = (id?: string) =>
  createAsyncThunk<Comment[], void, ThunkApiConfig<string>>(
    'SpecificArticlePage/fetchArticleComments',
    async (_, thunkApi) => {
      try {
        const { extra, dispatch } = thunkApi

        if (!id) {
          thunkApi.rejectWithValue('Article id was not found')
        }

        const response = await extra.api.get<Comment[]>(`/comments`, {
          params: {
            articleId: id,
            _expand: 'user',
          },
        })

        if (!response.data) {
          throw new Error()
        }

        dispatch(commentsActions.commentsReceived(response.data))

        return response.data
      } catch (error) {
        return thunkApi.rejectWithValue('Comments were not found')
      }
    }
  )
