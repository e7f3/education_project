import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Select, SelectOption } from 'shared/ui/Select/Select'

import { Currency } from '../../model/types/currency'

export interface CurrencySelectProps {
  className?: string
  value?: string
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export type CurrencyOption = SelectOption

const selectOptions: CurrencyOption[] = Object.entries(Currency).map(
  ([_, content]) => ({ value: content, content })
)

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const handleChange = useCallback(
    (value?: string) => {
      onChange?.(value as Currency)
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
      label={t('Currency')}
    />
  )
})
