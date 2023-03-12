import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage'

import { Profile, ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
