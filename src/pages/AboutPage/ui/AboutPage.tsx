import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { PageContainer } from 'widgets/PageContainer'

const AboutPage = memo(() => {
  const { t } = useTranslation('about')
  return <PageContainer>{t('About us')}</PageContainer>
})

export default AboutPage
