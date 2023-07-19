import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { SpecificArticle } from 'entities/Article'
import { Container } from 'shared/ui/Container/Container'

const SpecificArticlePage: FC = memo(() => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>{t('Article not found')}</div>
  }

  return (
    <Container>
      <SpecificArticle id={id} />
    </Container>
  )
})

export default SpecificArticlePage
