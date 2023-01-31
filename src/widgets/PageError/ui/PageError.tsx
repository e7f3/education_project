import { useTranslation } from 'react-i18next'

import classes from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation()

  const handleReload = () => {
    window.location.reload()
  }
  return (
    <div className={classes.PageError}>
      <h2>{t('Oops')}</h2>
      <button onClick={handleReload} type='button'>
        {t('Try again')}
      </button>
    </div>
  )
}
