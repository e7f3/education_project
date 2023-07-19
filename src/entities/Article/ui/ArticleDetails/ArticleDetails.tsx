import { FC, memo, useEffect } from 'react'

import { Loader } from 'shared/ui/Loader/Loader'

import classes from './ArticleDetails.module.scss'
import { Article } from '../../model/types/article'
import { ArticleBody } from '../ArticleBody/ArticleBody'
import { ArticleHeader } from '../ArticleHeader/ArticleHeader'

interface ArticleDetailsProps {
  data?: Article
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { data } = props

  if (!data) {
    return (
      <div className={classes.ArticleDetails}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={classes.ArticleDetails}>
      <ArticleHeader data={data} />
      <ArticleBody data={data} />
    </div>
  )
})
