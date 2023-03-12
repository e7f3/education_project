import { FC, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Text.module.scss'

export enum TextVariant {
  DEFAULT = 'default',
  ERROR = 'error',
}

export interface TextProps {
  className?: string
  variant?: TextVariant
  text?: string
  title?: string
}

export const Text: FC<TextProps> = memo((props) => {
  const { className, variant = TextVariant.DEFAULT, text, title } = props
  return (
    <div
      className={classNames(classes.Text, {}, [className, classes[variant]])}
    >
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  )
})
