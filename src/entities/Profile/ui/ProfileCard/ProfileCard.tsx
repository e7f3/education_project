import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Country, CountrySelect } from 'entities/Country'
import { Currency, CurrencySelect } from 'entities/Currency'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextMode, TextVariant } from 'shared/ui/Text/Text'

import classes from './ProfileCard.module.scss'
import { Profile } from '../../model/types/profileSchema'

export interface ProifleCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  changeFirstname?: (value?: string) => void
  changeLastname?: (value?: string) => void
  changeAge?: (value?: string) => void
  changeCountry?: (value?: Country) => void
  changeCity?: (value?: string) => void
  changeCurrency?: (value?: Currency) => void
  changeUsername?: (value?: string) => void
  changeAvatar?: (value?: string) => void
}

export const ProfileCard: FC<ProifleCardProps> = memo((props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly = true,
    changeFirstname,
    changeLastname,
    changeAge,
    changeCountry,
    changeCity,
    changeCurrency,
    changeUsername,
    changeAvatar,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div
        className={classNames(classes.ProfileCard, {}, [
          className,
          classes.loading,
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={classNames(classes.ProfileCard, {}, [
          className,
          classes.error,
        ])}
      >
        <Text
          mode={TextMode.ERROR}
          variant={TextVariant.TITLE}
          content={t('Profile error')}
        />
        <Text mode={TextMode.ERROR} content={t('Try to reload')} />
      </div>
    )
  }

  return (
    <Card className={classes.ProfileCard}>
      <div className={classNames(classes.ProfileCardContent, {}, [className])}>
        {data?.avatar && (
          <div className={classes.avatarWrapper}>
            <Avatar src={data?.avatar} alt={t('Avatar')} size={100} />
          </div>
        )}
        <div className={classes.profileInfo}>
          <Input
            value={data?.firstname}
            placeholder={t('Firstname')}
            readonly={readonly}
            onChange={changeFirstname}
          />
          <Input
            value={data?.lastname}
            placeholder={t('Lastname')}
            readonly={readonly}
            onChange={changeLastname}
          />
          <Input
            value={data?.age}
            placeholder={t('Age')}
            readonly={readonly}
            onChange={changeAge}
            type='number'
          />
          <CountrySelect
            value={data?.country}
            readonly={readonly}
            onChange={changeCountry}
          />
          <Input
            value={data?.city}
            placeholder={t('City')}
            readonly={readonly}
            onChange={changeCity}
          />

          <CurrencySelect
            value={data?.currency}
            readonly={readonly}
            onChange={changeCurrency}
          />
          <Input
            value={data?.username}
            placeholder={t('Username')}
            readonly={readonly}
            onChange={changeUsername}
          />
          <Input
            value={data?.avatar}
            placeholder={t('Avatar')}
            readonly={readonly}
            onChange={changeAvatar}
          />
        </div>
      </div>
    </Card>
  )
})
