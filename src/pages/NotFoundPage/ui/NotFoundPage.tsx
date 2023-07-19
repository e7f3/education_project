import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Container } from 'shared/ui/Container/Container'

import classes from './NotFoundPage.module.scss'

export interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      <Container>{t('Not Found Page')}</Container>
    </div>
  )
})
