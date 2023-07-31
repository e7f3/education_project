import { FC, SVGProps, VFC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Icon.module.scss'

export enum ColoredWith {
  STROKE = 'stroke',
  FILL = 'fill',
  DEFAULT = 'default',
}

interface IconProps {
  icon: VFC<SVGProps<SVGSVGElement>>
  coloredWith?: ColoredWith
  className?: string
}

export const Icon: FC<IconProps> = (props) => {
  const {
    icon: IconComponent,
    coloredWith = ColoredWith.DEFAULT,
    className,
  } = props

  return (
    <IconComponent
      className={classNames(className, {}, [classes[coloredWith]])}
    />
  )
}
