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
import type { CounterSchema } from 'entities/Counter'
import type { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'
import type { NewCommentSchema } from 'features/AddComment'
import type { LoginSchema } from 'features/AuthByUsername'
import type { CommentsSchema } from 'features/FetchComments'
import { ScrollPositionSchema } from 'features/SaveScrollPosition'
import type { ArticlesPageSchema } from 'pages/ArticlesPage/'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollPosition: ScrollPositionSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  articlesList?: ArticlesPageSchema
  comments?: CommentsSchema
  newComment?: NewCommentSchema
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
}

export interface ThunkApiConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgument
  state: StateSchema
}
