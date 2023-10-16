import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/utils/classNames/classNames'
import { PageContainer } from 'shared/ui/PageContainer/PageContainer'

import classes from './NotFoundPage.module.scss'

export interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      <PageContainer>{t('Not Found Page')}</PageContainer>
    </div>
  )
})
