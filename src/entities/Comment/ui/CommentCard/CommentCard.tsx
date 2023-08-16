import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment'

interface CommentCardProps {
  className?: string
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
  const { className, comment } = props
  const { text, user, date } = comment
  const { t } = useTranslation('profile')
  return (
    <div
      className={classNames(classes.CommentCard, {}, [className])}
      data-testid='comment-card'
    >
      <AppLink to={`${RoutePath[AppRoutes.PROFILE]}${user.id}`}>
        <div className={classes.CommentHead}>
          <img
            className={classes.AuthorAvatar}
            src={user.avatar}
            alt={t('Avatar')}
          />
          <Text content={user.username} variant={TextVariant.CAPTION} />
        </div>
      </AppLink>
      <div className={classes.CommentBody}>
        <Text content={text} />
        <div className={classes.CommentDate}>
          <Text content={date} variant={TextVariant.CAPTION} />
        </div>
      </div>
    </div>
  )
})
