import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage'

import { User, UserSchema } from '../types/userSchema'

const initialState: UserSchema = {
  _initialized: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.userAuthData = action.payload
    },
    initialAuth: (state) => {
      const user = localStorage.getItem(LOCALSTORAGE_USER_KEY)
      if (user) {
        state.userAuthData = JSON.parse(user)
      }
      state._initialized = true
    },
    logout: (state) => {
      state.userAuthData = undefined
      localStorage.removeItem(LOCALSTORAGE_USER_KEY)
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
