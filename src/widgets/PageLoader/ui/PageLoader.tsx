import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

import classes from './PageLoader.module.scss'

export interface PageLoaderProps {
    className?: string
}

export const PageLoader : FC<PageLoaderProps> = (props) => {
  const { className } = props
  return (
    <Loader className={classNames(classes.PageLoader, {}, [className])} />
  )
}
