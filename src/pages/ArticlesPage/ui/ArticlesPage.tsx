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
import { useDebouncedCallback } from 'shared/lib/hooks/useDebounceCallback'
import { PageContainer } from 'shared/ui/PageContainer/PageContainer'
import { ContentControls } from 'widgets/ContentControls'

import { getArticlesHasMore } from '../model/selectors/getArticlesHasMore/getArticlesHasMore'
import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading'
import { getArticlesLimit } from '../model/selectors/getArticlesLimit/getArticlesLimit'
import { getArticlesList } from '../model/selectors/getArticlesList/getArticlesList'
import { getArticlesPageNumber } from '../model/selectors/getArticlesPageNumber/getArticlesPageNumber'
import { getArticlesView } from '../model/selectors/getArticlesView/getArticlesView'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles'
import {
  articlesPageActions,
  articlesPageReducer,
} from '../model/slices/articlesPageSlice'

const reducers: ReducersList = {
  articlesList: articlesPageReducer,
}

const debounceDelay = 500

const ArticlesPage: FC = memo(() => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
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
    dispatch(fetchNextArticles())
    dispatch(articlesPageActions.setPageNumber(pageNumber + 1))
  }, [pageNumber, dispatch])

  const onPageReachesBottomDebounced = useDebouncedCallback(
    onPageReachesBottom,
    debounceDelay
  )

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(articlesPageActions.initState())
      dispatch(
        fetchArticlesList({
          page: 1,
        })
      )
    }
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <PageContainer onPageReachesBottom={onPageReachesBottomDebounced}>
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
