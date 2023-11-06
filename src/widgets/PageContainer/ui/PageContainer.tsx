import {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { StateSchema } from 'app/providers/StoreProvider'
import { scrollPositionActions } from 'features/SaveScrollPosition'
import { getScrollPositionForPage } from 'features/SaveScrollPosition/model/selectors/getScrollPositionForPage/getScrollPositionForPage'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
  UseInfiniteScrollParams,
  useInfiniteScroll,
} from 'shared/lib/hooks/useInfiniteScroll'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { throttle } from 'shared/lib/utils/throttle/throttle'

import classes from './PageContainer.module.scss'

interface PageContainerProps {
  className?: string
  children?: React.ReactNode
  onPageReachesBottom?: () => void
}

const THROTTLE_TIME = 100

export const PageContainer: FC<PageContainerProps> = (props) => {
  const { children, className, onPageReachesBottom } = props
  const wrapperRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const dispatch = useAppDispatch()
  const location = useLocation()

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionForPage(state, location.pathname)
  )

  const params: UseInfiniteScrollParams = useMemo(
    () => ({
      wrapperRef: wrapperRef as MutableRefObject<HTMLElement>,
      targetRef: targetRef as MutableRefObject<HTMLElement>,
      callback: onPageReachesBottom,
    }),
    [onPageReachesBottom]
  )

  const onPageScroll = useCallback(() => {
    if (wrapperRef.current) {
      const newScrollPosition = wrapperRef.current.scrollTop
      dispatch(
        scrollPositionActions.setScrollPosition({
          pageAddress: location.pathname,
          position: newScrollPosition,
        })
      )
    }
  }, [dispatch, location])

  const onPageScrollThrottled = useMemo(
    () => throttle(onPageScroll, THROTTLE_TIME),
    [onPageScroll]
  )

  useInfiniteScroll(params)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (wrapperRef.current) {
        wrapperRef.current.scrollTop = scrollPosition
      }
    }
  }, [wrapperRef, scrollPosition])

  return (
    <div
      className={classNames(classes.PageContainer, {}, [className])}
      ref={wrapperRef}
      onScroll={onPageScrollThrottled}
      data-testid='page-container'
    >
      {children}
      <div className={classes.trigger} ref={targetRef} />
    </div>
  )
}
