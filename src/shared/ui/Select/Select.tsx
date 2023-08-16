import { FC, memo, SelectHTMLAttributes, useMemo } from 'react'

import { classNames, Mods } from 'shared/lib/utils/classNames/classNames'

import classes from './Select.module.scss'

type SelectAttributes = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'readOnly'
>

export interface SelectOption {
  value: string
  content: string
}

export interface SelectProps extends SelectAttributes {
  className?: string
  label?: string
  value?: string
  onChange?: (value: string) => void
  options?: SelectOption[]
  readonly?: boolean
}

export const Select: FC<SelectProps> = memo((props) => {
  const { className, label, value, onChange, options, readonly = false } = props
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value)
  }

  const optionsList = useMemo(() => {
    return options?.map(({ value: optionValue, content }) => (
      <option className={classes.option} value={optionValue} key={optionValue}>
        {content}
      </option>
    ))
  }, [options])

  const mods: Mods = {
    [classes.readonly]: readonly,
  }
  return (
    <div className={classNames(classes.Wrapper, mods, [className])}>
      {label && value && <span className={classes.label}>{label}</span>}
      <select
        className={classNames(classes.Select, {}, [])}
        value={value}
        onChange={handleChange}
        disabled={readonly}
      >
        {label && !value && (
          <option className={classes.option} selected disabled hidden>
            {label}
          </option>
        )}
        {optionsList}
      </select>
    </div>
  )
})
