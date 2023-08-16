import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Button, ButtonColorScheme, ButtonTheme } from 'shared/ui/Button/Button'

export interface LanguageTogglerProps {
  className?: string
  short?: boolean
}

export const LanguageToggler: FC<LanguageTogglerProps> = memo((props) => {
  const { className, short = false } = props
  const { t, i18n } = useTranslation()

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const translateKey = short ? 'Lang' : 'Language'

  return (
    <Button
      theme={ButtonTheme.CLEAN}
      colorScheme={ButtonColorScheme.ACTION}
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
      data-testid='language-toggler'
    >
      {t(translateKey)}
    </Button>
  )
})
