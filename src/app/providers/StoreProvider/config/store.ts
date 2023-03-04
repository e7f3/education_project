import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { createReducerManager } from './reducerManager'
import type { StateSchema } from './StateSchema'

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type RootState = ReducersMapObject<StateSchema>
export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
