import { FC, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

import classes from './AppLoader.module.scss'

export interface AppLoaderProps {
  className?: string
}

export const AppLoader: FC<AppLoaderProps> = memo((props) => {
  const { className } = props
  return (
    <div className={classNames(classes.AppLoader, {}, [className])}>
      <Loader />
    </div>
  )
})
