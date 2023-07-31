import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'

import type { ArticleSchema } from 'entities/Article'
import type { CommentSchema } from 'entities/Comment'
import type { CounterSchema } from 'entities/Counter'
import type { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'
import type { ArticleCommentsSchema } from 'features/ArticleComments'
import type { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  articleComments?: ArticleCommentsSchema
  comment?: CommentSchema
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

export interface ThunkExtraArgument {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkApiConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgument
  state: StateSchema
}
