import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { profileReducer } from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'

export interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  return (
    <DynamicReducerLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('Profile page')}</div>
    </DynamicReducerLoader>
  )
})

export default ProfilePage
