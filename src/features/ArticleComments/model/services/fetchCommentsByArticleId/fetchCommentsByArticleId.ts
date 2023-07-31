import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'

interface FetchCommentsByArticleIdArgs {
  articleId: string
}

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  FetchCommentsByArticleIdArgs,
  ThunkApiConfig<string>
>('articleComments/fetchCommentsByArticleId', async (fetchData, thunkApi) => {
  const { extra } = thunkApi
  const { articleId } = fetchData
  const response = await extra.api.get<Comment[]>(`/comments`, {
    params: {
      articleId,
      _expand: 'user',
    },
  })
  if (!response.data) {
    throw new Error()
  }

  return response.data
})
