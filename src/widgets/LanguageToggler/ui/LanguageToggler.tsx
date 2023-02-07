import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

export interface LanguageTogglerProps {
  className?: string
  short?: boolean
}

export const LanguageToggler: FC<LanguageTogglerProps> = (props) => {
  const { className, short = false } = props
  const { t, i18n } = useTranslation()

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const translateKey = short ? 'Lang' : 'Language'

  return (
    <Button
      theme={ButtonTheme.DEFAULT}
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
      data-testid='language-toggler'
    >
      {t(translateKey)}
    </Button>
  )
}
