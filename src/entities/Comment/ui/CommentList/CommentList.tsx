import { FC, memo, useMemo } from 'react'

import classes from './CommentList.module.scss'
import { Comment } from '../../model/types/commentSchema'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  comments: Comment[]
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { comments } = props
  console.log(comments)

  const allComments = useMemo(() => {
    if (comments.length) {
      return comments.map((comment) => (
        <li key={comment.id}>
          <CommentCard comment={comment} />
        </li>
      ))
    }
    return null
  }, [comments])

  return (
    <ul className={classes.CommentList} data-testid='comment-list'>
      {allComments}
    </ul>
  )
})
