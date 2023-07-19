import { FC } from 'react'

import classes from './Container.module.scss'

interface ContainerProps {
  children?: React.ReactNode
}

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props
  return <div className={classes.Container}>{children}</div>
}
