import { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={initialReducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicReducerLoader>
  )
})

export default ProfilePage
