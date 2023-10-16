import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { PageContainer } from 'shared/ui/PageContainer/PageContainer'

const MainPage = memo(() => {
  const { t } = useTranslation('main')

  return <PageContainer>{t('Main Page')}</PageContainer>
})

export default MainPage
