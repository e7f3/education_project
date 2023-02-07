import { ButtonHTMLAttributes, FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  size?: ButtonSize
  variant?: ButtonVariant
  className?: string
}

export enum ButtonTheme {
  'CLEAN' = 'clean',
  'DEFAULT' = 'default',
  'INVERTED' = 'inverted',
}

export enum ButtonVariant {
  'DEFAULT' = 'default',
  'SQUARE' = 'square',
}

export enum ButtonSize {
  'M' = 'size_m',
  'L' = 'size_l',
  'XL' = 'size_xl',
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.DEFAULT,
    size = ButtonSize.M,
    variant = ButtonVariant.DEFAULT,
    children,
    ...restProps
  } = props

  const mods: Record<string, boolean> = {
    [classes[theme]]: Boolean(theme),
    [classes[size]]: Boolean(size),
    [classes[variant]]: Boolean(variant),
  }

  return (
    <button
      className={classNames(classes.Button, mods, [className])}
      type='button'
      {...restProps}
    >
      {children}
    </button>
  )
}
