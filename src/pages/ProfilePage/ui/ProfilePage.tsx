import { FC, memo, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile'
import { ProfileError } from 'entities/Profile/model/types/profileSchema'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { ProfilePageValidationErrors } from './ProfilePageValidationErrors/ProfilePageValidationErrors'

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

  const formData = useSelector(getProfileFormData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  const changeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ firstname: value || '' }))
    },
    [dispatch]
  )

  const changeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ lastname: value || '' }))
    },
    [dispatch]
  )

  const changeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ age: Number(value) }))
    },
    [dispatch]
  )
  const changeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.setProfileData({ country: value || Country.USA }))
    },
    [dispatch]
  )
  const changeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ city: value || '' }))
    },
    [dispatch]
  )

  const changeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(
        profileActions.setProfileData({ currency: value || Currency.USD })
      )
    },
    [dispatch]
  )
  const changeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ username: value || '' }))
    },
    [dispatch]
  )
  const changeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ avatar: value || '' }))
    },
    [dispatch]
  )

  return (
    <DynamicReducerLoader reducers={initialReducers} removeAfterUnmount>
      <ProfilePageHeader />
      <ProfilePageValidationErrors />
      <ProfileCard
        data={formData}
        error={error as string}
        isLoading={isLoading}
        readonly={readonly}
        changeFirstname={changeFirstname}
        changeLastname={changeLastname}
        changeAge={changeAge}
        changeCountry={changeCountry}
        changeCity={changeCity}
        changeCurrency={changeCurrency}
        changeUsername={changeUsername}
        changeAvatar={changeAvatar}
      />
    </DynamicReducerLoader>
  )
})

export default ProfilePage
