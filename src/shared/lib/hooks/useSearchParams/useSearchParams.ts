import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

type ParamName = string
type ParamValue = string

export function useParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setParams = useCallback(
    (params: Record<ParamName, ParamValue>) => {
      const searchParams = new URLSearchParams()
      Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value)
      })
      setSearchParams((prevParams) => {
        Object.entries(params).forEach(([key, value]) => {
          prevParams.set(key, value)
        })
        return prevParams
      })
    },
    [setSearchParams]
  )

  return { searchParams, setSearchParams: setParams }
}
