import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './NotFoundPage.module.scss'

export interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      {t('Not Found Page')}
    </div>
  )
}
