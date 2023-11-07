import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ArticlesList } from 'entities/Article'
import { View } from 'shared/const/common'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ContentControls } from 'widgets/ContentControls'
import { PageContainer } from 'widgets/PageContainer'

import { getArticlesHasMore } from '../model/selectors/getArticlesHasMore/getArticlesHasMore'
import { getArticlesInitialized } from '../model/selectors/getArticlesInitialized/getArticlesInitialized'
import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading'
import { getArticlesLimit } from '../model/selectors/getArticlesLimit/getArticlesLimit'
import { getArticlesList } from '../model/selectors/getArticlesList/getArticlesList'
import { getArticlesPageNumber } from '../model/selectors/getArticlesPageNumber/getArticlesPageNumber'
import { getArticlesView } from '../model/selectors/getArticlesView/getArticlesView'
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles'
import { initializeArticlesPage } from '../model/services/initializeArticlesPage/initializeArticlesPage'
import {
  articlesPageActions,
  articlesPageReducer,
} from '../model/slices/articlesPageSlice'

const reducers: ReducersList = {
  articlesList: articlesPageReducer,
}

const ArticlesPage: FC = memo(() => {
  const dispatch = useAppDispatch()
  const initialized = useSelector(getArticlesInitialized)
  const isLoading = useSelector(getArticlesIsLoading)
  const articlesList = useSelector(getArticlesList)
  const articlesView = useSelector(getArticlesView)
  const pageNumber = useSelector(getArticlesPageNumber)
  const hasMore = useSelector(getArticlesHasMore)
  const limit = useSelector(getArticlesLimit)

  const onViewChange = useCallback(
    (view: View) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  const onPageReachesBottom = useCallback(() => {
    if (hasMore) {
      dispatch(fetchNextArticles())
    }
  }, [hasMore, dispatch])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initializeArticlesPage())
    }
  }, [dispatch, initialized])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <PageContainer onPageReachesBottom={onPageReachesBottom}>
        <ContentControls view={articlesView} onViewChange={onViewChange} />
        <ArticlesList
          articles={articlesList}
          isLoading={isLoading}
          view={articlesView}
        />
      </PageContainer>
    </DynamicReducerLoader>
  )
})

export default ArticlesPage
