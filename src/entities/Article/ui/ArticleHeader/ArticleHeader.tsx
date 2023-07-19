import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import CalendarIcon from 'shared/assets/icons/calendar.svg'
import ViewsIcon from 'shared/assets/icons/views.svg'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './ArticleHeader.module.scss'
import { Article } from '../../model/types/article'

interface ArticleHeaderProps {
  data: Article
}

export const ArticleHeader: FC<ArticleHeaderProps> = memo((props) => {
  const { data } = props
  const { image, title, subtitle, views, createdAt, type } = data
  const { t } = useTranslation('article')

  const tags = useMemo(() => {
    return type.map((tag) => {
      return (
        <li className={classes.Tag} key={tag}>
          <Text content={t(tag)} variant={TextVariant.CAPTION} />
        </li>
      )
    })
  }, [type, t])

  return (
    <div className={classes.ArticleHeader}>
      <img
        className={classes.ArticleHeaderImage}
        src={image}
        alt={t('article header image')}
      />
      <ul className={classes.ArticleHeaderInfo}>
        <li className={classes.ArticleHeaderInfoSection}>
          <Text content={title} variant={TextVariant.TITLE} />
          <Text
            className={classes.ArticleHeaderSubtitle}
            content={subtitle}
            variant={TextVariant.SUBTITLE}
          />
        </li>

        <li className={classes.ArticleHeaderInfoSection}>
          <div className={classes.ArticleHeaderViews}>
            <ViewsIcon className={classes.ArticleHeaderIcon} />
            <Text content={views} variant={TextVariant.CAPTION} />
          </div>
          <div className={classes.ArticleHeaderDate}>
            <CalendarIcon className={classes.ArticleHeaderIcon} />
            <Text content={createdAt} variant={TextVariant.CAPTION} />
          </div>
        </li>

        <li className={classes.ArticleHeaderInfoSection}>
          <ul className={classes.ArticleHeaderTags}>{tags}</ul>
        </li>
      </ul>
    </div>
  )
})
