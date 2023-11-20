import { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ArticlesList, ArticleCardSize } from 'entities/Article'
import { View } from 'shared/const/common'
import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './ArticleRecomendations.module.scss'
import { getArticleRecomendations } from '../../model/selectors/getArticleRecomendations/getArticleRecomendations'
import { getArticleRecomendationsIsLoading } from '../../model/selectors/getArticleRecomendationsIsLoading/getArticleRecomendationsIsLoading'
import { fetchArticleRecomendations } from '../../model/services/fetchArticleRecomendations/fetchArticleRecomendations'
import { articleRecomendationsReducer } from '../../model/slices/articleRecomendationsSlice'

interface ArticleRecomendationsProps {
  className?: string
}

const reducers = {
  articleRecomendations: articleRecomendationsReducer,
}

export const ArticleRecomendations: FC<ArticleRecomendationsProps> = memo(
  (props) => {
    const { className } = props
    const { t } = useTranslation('articles')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleRecomendationsIsLoading)
    const recomendations = useSelector(getArticleRecomendations)

    useEffect(() => {
      if (__PROJECT__ !== 'storybook') {
        dispatch(fetchArticleRecomendations())
      }
    }, [dispatch])

    return (
      <DynamicReducerLoader reducers={reducers}>
        <div
          className={classNames(classes.ArticleRecomendations, {}, [className])}
        >
          <Text
            className={classes.ArticleRecomendationsTitle}
            content={t('Recomendations')}
            variant={TextVariant.SUBTITLE}
          />
          <div className={classes.RecomendationsList}>
            <ArticlesList
              className={classes.ArticlesList}
              articles={recomendations}
              isLoading={isLoading}
              size={ArticleCardSize.SMALL}
              view={View.GRID}
            />
          </div>
        </div>
      </DynamicReducerLoader>
    )
  }
)
