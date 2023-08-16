import { AsyncThunk, AsyncThunkAction } from '@reduxjs/toolkit'
import { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Comment, CommentList } from 'entities/Comment'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import classes from './Comments.module.scss'
import { getCommentsError } from '../../model/selectors/getCommentsError/getCommentsError'
import { getCommentsIsLoading } from '../../model/selectors/getCommentsIsLoading/getCommentsIsLoading'
import { commentsReducer, getComments } from '../../model/slices/commentsSlice'

interface CommentsProps {
  fetchComments: AsyncThunk<Comment[], void, ThunkApiConfig<string>>
}

const reducers: ReducersList = {
  comments: commentsReducer,
}

export const Comments: FC<CommentsProps> = memo((props) => {
  const { fetchComments } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getCommentsIsLoading)
  const error = useSelector(getCommentsError)
  const comments = useSelector(getComments.selectAll)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchComments())
    }
  }, [dispatch, fetchComments])

  let content

  if (isLoading) {
    content = 'Loading...'
  } else if (error) {
    content = error
  } else {
    content = <CommentList comments={comments} />
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={classes.Comments} data-testid='comments'>
        {content}
      </div>
    </DynamicReducerLoader>
  )
})
