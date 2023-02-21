import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { StateShema } from './StateShema'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})

export const createReduxStore = (initialState?: StateShema) => {
  return configureStore<StateShema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
