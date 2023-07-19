import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'shared/ui/Container/Container'

const AboutPage = memo(() => {
  const { t } = useTranslation('about')
  return <Container>{t('About us')}</Container>
})

export default AboutPage
