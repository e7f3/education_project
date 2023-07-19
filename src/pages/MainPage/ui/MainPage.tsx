import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'shared/ui/Container/Container'

const MainPage = memo(() => {
  const { t } = useTranslation('main')

  return <Container>{t('Main Page')}</Container>
})

export default MainPage
