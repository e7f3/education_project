import { FC, memo, useMemo } from 'react'

import { View } from 'shared/const/common'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Skeleton, SkeletonPurpose } from 'shared/ui/Skeleton/Skeleton'

import classes from './ArticlesList.module.scss'
import { Article } from '../../model/types/article'
import { ArticlePreview } from '../ArticlePreview/ArticlePreview'

interface ArticlesListProps {
  articles: Article[]
  view?: View
  isLoading?: boolean
}

export const ArticlesList: FC<ArticlesListProps> = memo((props) => {
  const { articles, view = View.GRID, isLoading = true } = props

  const articlesListItems = useMemo(
    () =>
      articles.map((article) => (
        <li key={article.id} className={classes.ArticlesListItem}>
          <ArticlePreview article={article} view={view} />
        </li>
      )),

    [articles, view]
  )

  let purpuse
  switch (view) {
    case View.GRID:
      purpuse = SkeletonPurpose.GRID_ARTICLES
      break
    case View.LIST:
      purpuse = SkeletonPurpose.LIST_ARTICLES
      break
    default:
      purpuse = SkeletonPurpose.GRID_ARTICLES
      break
  }

  let content

  if (isLoading) {
    // content = <Skeleton purpose={purpuse} />
  } else {
    content = articlesListItems
    // content = <Skeleton purpose={purpuse} />
  }

  return (
    <ul className={classNames(classes.ArticlesList, {}, [classes[view]])}>
      {content}
      {isLoading && <Skeleton purpose={purpuse} />}
    </ul>
  )
})
