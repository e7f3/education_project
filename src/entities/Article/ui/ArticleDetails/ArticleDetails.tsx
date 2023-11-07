import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import ArrowLeft from 'shared/assets/icons/arrow-left.svg'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
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
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGoBack = useCallback(() => {
    // Go back to the articles page
    navigate(RoutePath[AppRoutes.ARTICLES])
  }, [navigate])

  if (!data) {
    return (
      <div className={classes.ArticleDetails}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={classes.ArticleDetails}>
      <Button
        className={classes.GoBack}
        theme={ButtonTheme.CLEAN}
        onClick={handleGoBack}
      >
        <Icon className={classes.GoBackIcon} icon={ArrowLeft} />
        {t('Back')}
      </Button>
      <ArticleHeader data={data} />
      <ArticleBody data={data} />
    </div>
  )
})
