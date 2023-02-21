import React, { FC, InputHTMLAttributes, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Input.module.scss'

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

export interface InputProps extends InputAttributes {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props) => {
  const { className, value, onChange, type = 'text', ...restProps } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }
  return (
    <div className={className}>
      <input
        className={classNames(classes.Input, {}, [])}
        value={value}
        onChange={handleChange}
        type={type}
        data-testid='input'
        {...restProps}
      />
    </div>
  )
})
