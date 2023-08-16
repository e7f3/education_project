import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { getUserAuthData } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Button, ButtonColorScheme, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './ProfilePageHeader.module.scss'

export interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const readonly = useSelector(getProfileReadonly)
  const userData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)

  const enableEditMode = useCallback(() => {
    dispatch(profileActions.setReadonlyMode(false))
  }, [dispatch])

  const disableEditMode = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const saveChanges = useCallback(() => {
    if (userData && userData.id) {
      dispatch(
        updateProfileData({
          userId: userData.id,
        })
      )
    }
  }, [dispatch, userData])

  const canEdit = userData && profileData && userData.id === profileData.id

  if (!canEdit) {
    return (
      <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
        <Text content={t('Profile')} variant={TextVariant.TITLE} />
        <div className={classes.control} />
      </div>
    )
  }

  return (
    <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
      <Text content={t('Profile')} variant={TextVariant.TITLE} />
      <div className={classes.control}>
        {readonly ? (
          <Button theme={ButtonTheme.CLEAN} onClick={enableEditMode}>
            {t('Edit profile')}
          </Button>
        ) : (
          <>
            <Button
              theme={ButtonTheme.CLEAN}
              colorScheme={ButtonColorScheme.WARNING}
              onClick={disableEditMode}
            >
              {t('Cancel')}
            </Button>
            <Button theme={ButtonTheme.CLEAN} onClick={saveChanges}>
              {t('Save')}
            </Button>
          </>
        )}
      </div>
    </div>
  )
})
