import { useTranslation } from "react-i18next"

interface Props {}

const AboutPage = ({}: Props) => {
  const {t} = useTranslation('about')
  return <div>{t('About us')}</div>
}

export default AboutPage
