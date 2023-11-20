import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { View } from 'shared/const/common'
import { Mods, classNames } from 'shared/lib/utils/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Card, CardTheme } from 'shared/ui/Card/Card'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import { TagSize, Tags } from 'widgets/Tags'

import classes from './ArticleCard.module.scss'
import {
  ArticleBlockText,
  Article,
  ArticleBlockType,
} from '../../model/types/article'

export enum ArticleCardSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

interface ArticleCardProps {
  view?: View
  size?: ArticleCardSize
  article?: Article
  onClick?: () => void
  className?: string
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  const {
    article,
    view = View.GRID,
    size = ArticleCardSize.MEDIUM,
    onClick,
    className,
  } = props

  const { t } = useTranslation('articles')

  const mods: Mods = useMemo(
    () => ({ [classes.navigate]: view === View.GRID }),
    [view]
  )

  const firstTextBlock = useMemo(
    () =>
      article?.blocks.find((block) => block.type === ArticleBlockType.TEXT) as
        | ArticleBlockText
        | undefined,
    [article]
  )

  const tags = useMemo(() => article?.type.map((tag) => t(tag)), [article, t])

  if (!article) {
    return null
  }

  return (
    <Card
      className={classNames(classes.ArticleCard, mods, [className])}
      theme={CardTheme.DEFAULT}
      role='link'
    >
      <div
        className={classNames(classes.ArticleCardContent, {}, [classes[view]])}
      >
        <div className={classes.ArticleCardHead}>
          <Tags tags={tags} size={TagSize.SMALL} />
          <div className={classes.ArticleCardDate}>
            <Text content={article.createdAt} variant={TextVariant.CAPTION} />
          </div>
        </div>
        <div className={classes.ArticleCardBody}>
          <Text
            content={article.title}
            variant={
              size === ArticleCardSize.SMALL
                ? TextVariant.SUBTITLE
                : TextVariant.TITLE
            }
          />
          <Text
            content={article.subtitle}
            variant={
              size === ArticleCardSize.SMALL
                ? TextVariant.PARAGRAPH
                : TextVariant.SUBTITLE
            }
          />
          {view === View.LIST && (
            <>
              <img
                className={classes.ArticleCardImage}
                src={article.image}
                alt={article.title}
              />
              {firstTextBlock && (
                <Text
                  className={classes.ArticleCardText}
                  content={firstTextBlock.paragraphs[0]}
                  variant={TextVariant.PARAGRAPH}
                />
              )}
            </>
          )}
        </div>
        {view === View.LIST && (
          <Button
            className={classes.ArticleCardButton}
            variant={ButtonVariant.DEFAULT}
            onClick={onClick}
          >
            {t('More')}
          </Button>
        )}
      </div>
    </Card>
  )
}
