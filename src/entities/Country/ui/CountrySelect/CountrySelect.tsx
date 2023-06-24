import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Select, SelectOption } from 'shared/ui/Select/Select'

import { Country } from '../../model/types/country'

export interface CountrySelectProps {
  className?: string
  value?: string
  onChange?: (value: Country) => void
  readonly?: boolean
}

export type CountryOption = SelectOption

const selectOptions: CountryOption[] = Object.entries(Country).map(
  ([_, content]) => ({ value: content, content })
)
export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const handleChange = useCallback(
    (value?: string) => {
      onChange?.(value as Country)
    },
    [onChange]
  )

  return (
    <Select
      className={className}
      value={value}
      onChange={handleChange}
      options={selectOptions}
      readonly={readonly}
      label={t('Country')}
    />
  )
})
