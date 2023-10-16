import { FC, MutableRefObject, useMemo, useRef } from 'react'

import {
  UseInfiniteScrollParams,
  useInfiniteScroll,
} from 'shared/lib/hooks/useInfiniteScroll'
import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './PageContainer.module.scss'

interface PageContainerProps {
  className?: string
  children?: React.ReactNode
  onPageReachesBottom?: () => void
}

export const PageContainer: FC<PageContainerProps> = (props) => {
  const { children, className, onPageReachesBottom } = props
  const wrapperRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const params: UseInfiniteScrollParams = useMemo(
    () => ({
      wrapperRef: wrapperRef as MutableRefObject<HTMLElement>,
      targetRef: targetRef as MutableRefObject<HTMLElement>,
      callback: onPageReachesBottom,
    }),
    [onPageReachesBottom]
  )

  useInfiniteScroll(params)
  return (
    <div
      className={classNames(classes.PageContainer, {}, [className])}
      ref={wrapperRef}
      data-testid='page-container'
    >
      {children}
      <div className={classes.trigger} ref={targetRef} />
    </div>
  )
}
