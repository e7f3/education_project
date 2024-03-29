import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { SpecificArticle } from 'entities/Article'
import { ArticleRecomendations } from 'features/FetchArticleRecomendations'
import { CommentsSection } from 'widgets/CommentsSection'
import { PageContainer } from 'widgets/PageContainer'

import classes from './SpecificArticlePage.module.scss'
import { addCommentToArticle } from '../model/services/addCommentToArticle/addCommentToArticle'
import { getFetcher } from '../model/services/fetchArticleComments/fetchArticleComments'

const SpecificArticlePage: FC = memo(() => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>{t('Article not found')}</div>
  }

  const fetchComments = getFetcher(id)

  return (
    <PageContainer>
      <SpecificArticle id={id} />
      <ArticleRecomendations className={classes.ArticleRecomendations} />
      <CommentsSection
        fetchComments={fetchComments}
        sendNewComment={addCommentToArticle}
      />
    </PageContainer>
  )
})

export default SpecificArticlePage
