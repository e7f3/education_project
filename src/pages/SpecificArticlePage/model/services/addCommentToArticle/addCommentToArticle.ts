import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { getArticleData } from 'entities/Article'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getNewCommentText, newCommentActions } from 'features/AddComment'
import { commentsActions } from 'features/FetchComments/model/slices/commentsSlice'
import { createCommentDateString } from 'shared/lib/utils/createCommentDateString/createCommentDateString'

import { getFetcher } from '../fetchArticleComments/fetchArticleComments'

export const addCommentToArticle = createAsyncThunk<
  Comment,
  void,
  ThunkApiConfig<string>
>('SpecificArticlePage/addCommentToArticle', async (_, thunkApi) => {
  try {
    const { extra, getState, dispatch } = thunkApi
    const text = getNewCommentText(getState())
    const userData = getUserAuthData(getState())
    const articleData = getArticleData(getState())
    const dateStr = createCommentDateString(new Date())

    if (!text || !userData || !articleData) {
      return thunkApi.rejectWithValue('User or article or comment not found')
    }

    const commentData = {
      articleId: articleData.id,
      text,
      userId: userData.id,
      date: dateStr,
    }

    const response = await extra.api.post<Comment>(`/comments`, commentData)

    if (!response.data) {
      throw new Error()
    }

    // Clean comment form
    dispatch(newCommentActions.setComment(''))

    // Add new comment to article comments
    // dispatch(commentsActions.commentAdded(response.data))

    const fetchArticleComments = getFetcher(articleData.id)
    // Refetch comments
    dispatch(fetchArticleComments())

    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue('Comment was not added')
  }
})
