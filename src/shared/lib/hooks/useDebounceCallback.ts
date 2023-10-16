import { useCallback, useEffect, useRef } from 'react'

export function useDebouncedCallback<A extends any[]>(
  callback: (...args: A) => void,
  wait: number
) {
  // track args & timeout handle between calls
  const argsRef = useRef<A>()
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  function cleanup() {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
  }

  // make sure our timeout gets cleared if
  // our consuming component gets unmounted
  useEffect(() => cleanup, [])

  return useCallback(
    (...args: A) => {
      argsRef.current = args
      cleanup()
      timeout.current = setTimeout(() => {
        if (argsRef.current) {
          callback(...argsRef.current)
        }
      }, wait)
    },
    [callback, wait]
  )
}
