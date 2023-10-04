import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'

import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { View } from 'shared/const/common'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Card, CardTheme } from 'shared/ui/Card/Card'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import { Tags, TagSize } from 'widgets/Tags'

import classes from './ArticlePreview.module.scss'
import {
  Article,
  ArticleBlockText,
  ArticleBlockType,
  ArticleType,
} from '../../model/types/article'

interface ArticlePreviewProps {
  view?: View
  article?: Article
}

export const ArticlePreview: FC<ArticlePreviewProps> = memo((props) => {
  const { article, view = View.GRID } = props
  const navigate = useNavigate()
  const { t } = useTranslation('articles')

  const onCardClick = useCallback(() => {
    if (article) {
      navigate(RoutePath[AppRoutes.SPECIFIC_ARTICLE] + article.id)
    }
  }, [navigate, article])

  if (!article) {
    return null
  }

  const firstTextBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT
  ) as ArticleBlockText | undefined

  // const tags = article.type as ArticleType[]
  const tags = article.type.map((tag) => t(tag))

  return (
    <Card
      className={classes.ArticlePreviewCard}
      theme={CardTheme.DEFAULT}
      // onClick={onCardClick}
      role='link'
    >
      <div className={classNames(classes.ArticlePreview, {}, [classes[view]])}>
        <div className={classes.ArticlePreviewHead}>
          <Tags tags={tags} size={TagSize.SMALL} />
          <div className={classes.ArticlePreviewDate}>
            <Text content={article.createdAt} variant={TextVariant.CAPTION} />
          </div>
        </div>
        <div className={classes.ArticlePreviewBody}>
          <Text content={article.title} variant={TextVariant.TITLE} />
          <Text content={article.subtitle} variant={TextVariant.SUBTITLE} />
          {view === View.LIST && (
            <>
              <img
                className={classes.ArticlePreviewImage}
                src={article.image}
                alt={article.title}
              />
              {firstTextBlock && (
                <Text
                  className={classes.ArticlePreviewText}
                  content={firstTextBlock.paragraphs[0]}
                  variant={TextVariant.PARAGRAPH}
                />
              )}
            </>
          )}
        </div>
        <Button
          className={classes.ArticlePreviewButton}
          variant={ButtonVariant.DEFAULT}
          onClick={onCardClick}
        >
          {t('More')}
        </Button>
      </div>
    </Card>
  )
})
