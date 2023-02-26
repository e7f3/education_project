import {
  combineReducers,
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

import { StateShema } from './StateShema'

const reducersMapObj: ReducersMapObject<StateShema> = {
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer,
}
const rootReducers = combineReducers(reducersMapObj)

export const createReduxStore = (initialState?: StateShema) => {
  return configureStore<StateShema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
