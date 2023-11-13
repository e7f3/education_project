import { FC, memo, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ArticlesList } from 'entities/Article'
import { ArticleType } from 'entities/Article/model/types/article'
import { View } from 'shared/const/common'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useParams } from 'shared/lib/hooks/useSearchParams/useSearchParams'
import { isPartOfEnum } from 'shared/lib/utils/isPartOfEnum/isPartOfEnum'
import { ContentOrder, ContentSortBy, ContentTag } from 'shared/types/common'
import { ContentControls } from 'widgets/ContentControls'
import { PageContainer } from 'widgets/PageContainer'

import { getArticlesHasMore } from '../model/selectors/getArticlesHasMore/getArticlesHasMore'
import { getArticlesInitialized } from '../model/selectors/getArticlesInitialized/getArticlesInitialized'
import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading'
import { getArticlesLimit } from '../model/selectors/getArticlesLimit/getArticlesLimit'
import { getArticlesList } from '../model/selectors/getArticlesList/getArticlesList'
import { getArticlesOrder } from '../model/selectors/getArticlesOrder/getArticlesOrder'
import { getArticlesPageNumber } from '../model/selectors/getArticlesPageNumber/getArticlesPageNumber'
import { getArticlesSearch } from '../model/selectors/getArticlesSearch/getArticlesSearch'
import { getArticlesSort } from '../model/selectors/getArticlesSort/getArticlesSort'
import { getArticlesTypes } from '../model/selectors/getArticlesTypes/getArticlesTypes'
import { getArticlesView } from '../model/selectors/getArticlesView/getArticlesView'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
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
  const { t } = useTranslation('articles')
  const { searchParams, setSearchParams } = useParams()
  const dispatch = useAppDispatch()
  const initialized = useSelector(getArticlesInitialized)
  const isLoading = useSelector(getArticlesIsLoading)
  const articlesList = useSelector(getArticlesList)
  const articlesView = useSelector(getArticlesView)
  const hasMore = useSelector(getArticlesHasMore)
  const articlesOrder = useSelector(getArticlesOrder)
  const articlesSort = useSelector(getArticlesSort)
  const articlesSearch = useSelector(getArticlesSearch)
  const articlesTypes = useSelector(getArticlesTypes)

  const articlesTags = useMemo<ContentTag[]>(
    () =>
      Object.entries<boolean>(articlesTypes).map(([value, selected]) => ({
        value,
        content: t(value),
        selected,
      })),
    [articlesTypes, t]
  )

  const fetchArticles = useCallback(() => {
    dispatch(fetchArticlesList({ replaceExisting: true }))
  }, [dispatch])

  const onViewChange = useCallback(
    (view: View) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  const onOrderChange = useCallback(
    (newOrder: ContentOrder) => {
      setSearchParams({ order: newOrder })
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPageNumber(1))
      fetchArticles()
    },
    [dispatch, fetchArticles, setSearchParams]
  )

  const onSortChange = useCallback(
    (newSort: ContentSortBy) => {
      setSearchParams({ sort: newSort })
      dispatch(articlesPageActions.setSort(newSort))
      dispatch(articlesPageActions.setPageNumber(1))
      fetchArticles()
    },
    [dispatch, fetchArticles, setSearchParams]
  )

  const onSearchChange = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch))
    },
    [dispatch]
  )

  const onSearch = useCallback(() => {
    setSearchParams({ search: articlesSearch })
    dispatch(articlesPageActions.setPageNumber(1))
    fetchArticles()
  }, [dispatch, fetchArticles, articlesSearch, setSearchParams])

  const onTagToggle = useCallback(
    (value: string) => {
      setSearchParams({ type: value })
      dispatch(articlesPageActions.toggleType(value as ArticleType))
      fetchArticles()
    },
    [dispatch, setSearchParams, fetchArticles]
  )

  const onPageReachesBottom = useCallback(() => {
    if (hasMore) {
      dispatch(fetchNextArticles())
    }
  }, [hasMore, dispatch])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initializeArticlesPage(searchParams))
    }
  }, [dispatch, initialized, searchParams])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <PageContainer onPageReachesBottom={onPageReachesBottom}>
        <ContentControls
          view={articlesView}
          onViewChange={onViewChange}
          order={articlesOrder}
          onOrderChange={onOrderChange}
          sort={articlesSort}
          onSortChange={onSortChange}
          search={articlesSearch}
          onSearchChange={onSearchChange}
          onSearchClick={onSearch}
          tags={articlesTags}
          onTagToggle={onTagToggle}
        />
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
