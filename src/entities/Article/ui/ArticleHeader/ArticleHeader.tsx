import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import CalendarIcon from 'shared/assets/icons/calendar.svg'
import ViewsIcon from 'shared/assets/icons/views.svg'
import { ColoredWith, Icon } from 'shared/ui/Icon/Icon'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import { Tags, TagSize } from 'widgets/Tags'

import classes from './ArticleHeader.module.scss'
import { Article } from '../../model/types/article'

interface ArticleHeaderProps {
  data: Article
}

export const ArticleHeader: FC<ArticleHeaderProps> = memo((props) => {
  const { data } = props
  const { image, title, subtitle, views, createdAt, type } = data
  const { t } = useTranslation('articles')

  const tags = useMemo(() => type.map((tag) => t(tag)), [type, t])

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
            <Icon
              className={classes.ArticleHeaderIcon}
              icon={ViewsIcon}
              coloredWith={ColoredWith.FILL}
            />
            <Text content={views} variant={TextVariant.CAPTION} />
          </div>
          <div className={classes.ArticleHeaderDate}>
            <Icon
              className={classes.ArticleHeaderIcon}
              icon={CalendarIcon}
              coloredWith={ColoredWith.STROKE}
            />
            <Text content={createdAt} variant={TextVariant.CAPTION} />
          </div>
        </li>

        <li className={classes.ArticleHeaderInfoSection}>
          <Tags tags={tags} size={TagSize.SMALL} />
        </li>
      </ul>
    </div>
  )
})
