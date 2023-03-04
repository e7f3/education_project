import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { FC } from 'react'
import { Provider } from 'react-redux'

import type { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

export interface StoreProviderProps {
  initialState?: StateSchema
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { initialState, children, asyncReducers } = props
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<StateSchema>
  )
  return <Provider store={store}>{children}</Provider>
}
