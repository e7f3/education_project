import { useTranslation } from 'react-i18next'

interface Props {}

const MainPage = ({}: Props) => {
  const { t } = useTranslation('main')
  return <div>{t('Main Page')}</div>
}

export default MainPage
