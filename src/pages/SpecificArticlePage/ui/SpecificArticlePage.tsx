import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { SpecificArticle } from 'entities/Article'
import {
  ArticleComments,
  articleCommentsReducer,
} from 'features/ArticleComments'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { Container } from 'shared/ui/Container/Container'

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
}

const SpecificArticlePage: FC = memo(() => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>{t('Article not found')}</div>
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <Container>
        <SpecificArticle id={id} />
        <ArticleComments id={id} />
      </Container>
    </DynamicReducerLoader>
  )
})

export default SpecificArticlePage
