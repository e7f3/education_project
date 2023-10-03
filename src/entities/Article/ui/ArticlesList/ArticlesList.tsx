import { FC, memo, useMemo } from 'react'

import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Skeleton, SkeletonPurpose } from 'shared/ui/Skeleton/Skeleton'

import classes from './ArticlesList.module.scss'
import { Article, ArticleView } from '../../model/types/article'
import { ArticlePreview } from '../ArticlePreview/ArticlePreview'

interface ArticlesListProps {
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
}

export const ArticlesList: FC<ArticlesListProps> = memo((props) => {
  const { articles, view = ArticleView.GRID, isLoading = true } = props

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
    case ArticleView.GRID:
      purpuse = SkeletonPurpose.GRID_ARTICLES
      break
    case ArticleView.LIST:
      purpuse = SkeletonPurpose.LIST_ARTICLES
      break
    default:
      purpuse = SkeletonPurpose.GRID_ARTICLES
      break
  }

  let content

  if (isLoading) {
    content = <Skeleton purpose={purpuse} />
  } else {
    content = articlesListItems
  }

  return (
    <ul className={classNames(classes.ArticlesList, {}, [classes[view]])}>
      {content}
    </ul>
  )
})
