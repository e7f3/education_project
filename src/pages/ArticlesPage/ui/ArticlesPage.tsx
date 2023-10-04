import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import GridViewIcon from 'shared/assets/icons/article-view_grid1.svg'

import { ArticlesList } from 'entities/Article'
import ListViewIcon from 'shared/assets/icons/article-view_list.svg'
import { View } from 'shared/const/common'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Container } from 'shared/ui/Container/Container'
import { ContentControls } from 'widgets/ContentControls'

import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading'
import { getArticlesList } from '../model/selectors/getArticlesList/getArticlesList'
import { getArticlesView } from '../model/selectors/getArticlesView/getArticlesView'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import {
  articlesPageActions,
  articlesPageReducer,
} from '../model/slices/articlesPageSlice'

const reducers: ReducersList = {
  articlesList: articlesPageReducer,
}

const ArticlesPage: FC = memo(() => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticlesIsLoading)
  const articlesList = useSelector(getArticlesList)
  const articlesView = useSelector(getArticlesView)

  const onViewChange = useCallback(
    (view: View) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesList())
      dispatch(articlesPageActions.initState())
    }
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <Container>
        <ContentControls view={articlesView} onViewChange={onViewChange} />
        <ArticlesList
          articles={articlesList}
          isLoading={isLoading}
          view={articlesView}
        />
      </Container>
    </DynamicReducerLoader>
  )
})

export default ArticlesPage
