import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'

import { CounterShema } from 'entities/Counter'
import { UserShema } from 'entities/User'
import type { LoginShema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterShema
  user: UserShema
  loginForm?: LoginShema
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export type StateSchemaKey = keyof StateSchema
