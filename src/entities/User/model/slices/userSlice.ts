import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage'

import { User, UserSchema } from '../types/userSchema'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.userAuthData = action.payload
    },
    initialAuth: (state) => {
      const userData = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_USER_KEY) || ''
      )
      if (userData) {
        state.userAuthData = userData
      }
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
