import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

export interface LanguageTogglerProps {
  className?: string
}

export const LanguageToggler: FC<LanguageTogglerProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      theme={ButtonTheme.DEFAULT}
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
      data-testid='language-toggler'
    >
      {t('Language')}
    </Button>
  )
}
