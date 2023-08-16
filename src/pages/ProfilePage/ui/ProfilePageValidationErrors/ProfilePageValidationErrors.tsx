import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getProfileValidateErrors } from 'entities/Profile'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Text, TextMode, TextVariant } from 'shared/ui/Text/Text'

import classes from './ProfilePageValidationErrors.module.scss'

export interface ProfilePageValidationErrorsProps {
  className?: string
}

export const ProfilePageValidationErrors: FC<ProfilePageValidationErrorsProps> =
  memo((props) => {
    const { className } = props
    const validateErrors = useSelector(getProfileValidateErrors)
    const { t } = useTranslation('profile')

    const errors = useMemo(() => {
      if (!validateErrors || !validateErrors.length) {
        return null
      }
      return validateErrors.map((error) => {
        return <Text content={t(error)} mode={TextMode.ERROR} key={error} />
      })
    }, [validateErrors, t])

    if (!errors) {
      return null
    }

    return (
      <div
        className={classNames(classes.ProfilePageValidationErrors, {}, [
          className,
        ])}
      >
        {errors}
      </div>
    )
  })
