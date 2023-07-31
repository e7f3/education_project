import { FC, memo, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { CommentList } from 'entities/Comment'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import classes from './ArticleComments.module.scss'
import { getArticleCommentsError } from '../../model/selectors/getArticleCommentsError/getArticleCommentstsError'
import { getArticleCommentsIsLoading } from '../../model/selectors/getArticleCommentsIsLoading/getSpecificArticleCommentsIsLoading'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
  articleCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleCommentsSlice'

interface ArticleCommentsProps {
  id: string
}

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
}

export const ArticleComments: FC<ArticleCommentsProps> = memo((props) => {
  const { id } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const error = useSelector(getArticleCommentsError)
  const comments = useSelector(getArticleComments.selectAll)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId({ articleId: id }))
    }
  }, [id, dispatch])

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
      <div className={classes.ArticleComments} data-testid='article-comments'>
        {content}
      </div>
    </DynamicReducerLoader>
  )
})
