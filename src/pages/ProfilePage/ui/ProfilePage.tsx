import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Container } from 'shared/ui/Container/Container'

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
  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileFormData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchProfileData({ userId: id }))
      }
    }
  }, [dispatch, id])

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
      <Container>
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
      </Container>
    </DynamicReducerLoader>
  )
})

export default ProfilePage
