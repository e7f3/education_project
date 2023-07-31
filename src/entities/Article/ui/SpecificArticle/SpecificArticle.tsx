import { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

import classes from './SpecificArticle.module.scss'
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData'
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError'
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading'
import { articleReducer } from '../../model/slices/articleSlice'
import { ArticleDetails } from '../ArticleDetails/ArticleDetails'

interface SpecificArticleProps {
  id: string
}

const reducers: ReducersList = {
  article: articleReducer,
}

export const SpecificArticle: FC<SpecificArticleProps> = memo((props) => {
  const { id: articleId } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleIsLoading)
  const error = useSelector(getArticleError)
  const data = useSelector(getArticleData)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(articleId))
    }
  }, [dispatch, articleId])

  let content

  if (isLoading) {
    content = <Skeleton />
  } else if (error) {
    content = <div>{error}</div>
  } else {
    content = <ArticleDetails data={data} />
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={classes.SpecificArticle}>{content}</div>
    </DynamicReducerLoader>
  )
})
