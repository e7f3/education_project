import { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ArticlesList } from 'entities/Article'
import { ArticleView } from 'entities/Article/model/types/article'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Container } from 'shared/ui/Container/Container'

import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading'
import { getArticlesList } from '../model/selectors/getArticlesList/getArticlesList'
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

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesList())
    }
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <Container>
        <ArticlesList
          articles={articlesList}
          isLoading={isLoading}
          view={ArticleView.GRID}
        />
      </Container>
    </DynamicReducerLoader>
  )
})

export default ArticlesPage
