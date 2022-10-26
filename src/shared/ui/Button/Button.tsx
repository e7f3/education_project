import classes from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonTheme
  className?: string
}

export enum ButtonTheme {
  'CLEAN' = 'clean',
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...restProps } = props
  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...restProps}
    >
      {children}
    </button>
  )
}
