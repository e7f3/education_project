import { FC } from 'react'
import { Provider } from 'react-redux'

import { StateShema } from '../config/StateShema'
import { createReduxStore } from '../config/store'

export interface StoreProviderProps {
  initialState?: StateShema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { initialState, children } = props
  const store = createReduxStore(initialState)
  return <Provider store={store}>{children}</Provider>
}
