import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProifleIsLoading/getProfileIsLoadind'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'

import classes from './ProfileCard.module.scss'

export interface ProifleCardProps {
  className?: string
}

export const ProfileCard: FC<ProifleCardProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  return (
    <div className={classNames(classes.ProfileCard, {}, [className])}>
      <div className={classes.profileHeader}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.CLEAN}>{t('Edit profile')}</Button>
      </div>
      <div className={classes.profileInfo}>
        <Input value={data?.firstname} placeholder={t('Firstname')} />
        <Input value={data?.lastname} placeholder={t('Lastname')} />
      </div>
    </div>
  )
}
