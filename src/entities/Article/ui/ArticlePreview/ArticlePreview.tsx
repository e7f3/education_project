import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { View } from 'shared/const/common'
import { AppLink } from 'shared/ui/AppLink/AppLink'

import { Article } from '../../model/types/article'
import { ArticleCard, ArticleCardSize } from '../ArticleCard/ArticleCard'

interface ArticlePreviewProps {
  view?: View
  size?: ArticleCardSize
  article?: Article
  className?: string
}

export const ArticlePreview: FC<ArticlePreviewProps> = memo((props) => {
  const {
    article,
    view = View.GRID,
    size = ArticleCardSize.MEDIUM,
    className,
  } = props

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    if (article) {
      navigate(RoutePath[AppRoutes.SPECIFIC_ARTICLE] + article.id)
    }
  }, [navigate, article])

  if (!article) {
    return null
  }

  switch (view) {
    case View.GRID:
      return (
        <AppLink to={RoutePath[AppRoutes.SPECIFIC_ARTICLE] + article.id}>
          <ArticleCard
            view={view}
            size={size}
            article={article}
            onClick={onClick}
            className={className}
          />
        </AppLink>
      )
    default:
      return (
        <ArticleCard
          view={view}
          size={size}
          article={article}
          onClick={onClick}
          className={className}
        />
      )
  }
})
