import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Profile, ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
  data: undefined,
  formData: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonlyMode: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.formData = { ...state.formData, ...action.payload }
    },
    cancelEdit: (state) => {
      state.formData = state.data
      state.readonly = true
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      // fetchProfileData
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.formData = action.payload
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // updateProfileData
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.formData = action.payload
        }
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
