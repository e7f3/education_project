import { MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollParams {
  callback?: () => void
  wrapperRef: MutableRefObject<HTMLElement>
  targetRef?: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({
  callback,
  wrapperRef,
  targetRef,
}: UseInfiniteScrollParams) => {
  useEffect(() => {
    const handleObserver = (entities: IntersectionObserverEntry[]) => {
      const target = entities[0]
      if (target.isIntersecting) {
        callback?.()
      }
    }
    const options: IntersectionObserverInit = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    }

    if (targetRef?.current) {
      const observer = new IntersectionObserver(handleObserver, options)
      observer.observe(targetRef.current)
      return () => {
        observer.disconnect()
      }
    }

    return () => ({})
  }, [wrapperRef, targetRef, callback])
}
