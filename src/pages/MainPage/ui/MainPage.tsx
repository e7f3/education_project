import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')

  // useEffect(() => {
  //   console.log('TEST', ready)
  // }, [ready])
  return <div>{t('Main Page')}</div>
}

export default MainPage
