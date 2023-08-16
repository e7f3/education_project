import { AsyncThunk } from '@reduxjs/toolkit'
import { FC, memo } from 'react'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { AddCommentForm } from 'features/AddComment'
import { Comments } from 'features/FetchComments'

import classes from './CommentsSection.module.scss'

interface CommentsSectionProps {
  fetchComments: AsyncThunk<Comment[], void, ThunkApiConfig<string>>
  sendNewComment: AsyncThunk<Comment, void, ThunkApiConfig<string>>
}

export const CommentsSection: FC<CommentsSectionProps> = memo((props) => {
  const { fetchComments, sendNewComment } = props
  return (
    <div className={classes.CommentsSection}>
      <AddCommentForm onSend={sendNewComment} />
      <Comments fetchComments={fetchComments} />
    </div>
  )
})
