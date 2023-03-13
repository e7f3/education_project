import { Reducer } from '@reduxjs/toolkit'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import type {
  StateSchemaKey,
  StoreWithReducerManager,
} from 'app/providers/StoreProvider/config/StateSchema'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

export interface DynamicReducerLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = (props) => {
  const { reducers, removeAfterUnmount = true, children } = props

  const dispatch = useDispatch()
  const store = useStore() as StoreWithReducerManager

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${reducerKey} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey, _]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey)
          dispatch({ type: `@DESTROY ${reducerKey} reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}
