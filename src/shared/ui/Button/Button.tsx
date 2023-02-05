import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  className?: string
}

export enum ButtonTheme {
  'CLEAN' = 'clean',
  'DEFAULT' = 'default',
  'OUTLINED' = 'outlined',
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, theme = ButtonTheme.DEFAULT, children, ...restProps
  } = props
  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      type='button'
      {...restProps}
    >
      {children}
    </button>
  )
}
