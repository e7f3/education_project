import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'shared/ui/Container/Container'

const ArticlesPage: FC = memo(() => {
  const { t } = useTranslation('articles')

  return <Container>{t('Articles Page')}</Container>
})

export default ArticlesPage
