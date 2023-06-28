import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import {
  Profile,
  ProfileSchema,
  ValidateProfileError,
  FetchProfileError,
  UpdateProfileError,
} from '../types/profileSchema'

const initialState: ProfileSchema = {
  data: undefined,
  formData: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  validateErrors: undefined,
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
      state.validateErrors = undefined
      state.readonly = true
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      // fetchProfileData
      .addCase(fetchProfileData.pending, (state) => {
        console.log('pending')
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          console.log('fulfilled')

          state.isLoading = false
          state.data = action.payload
          state.formData = action.payload
        }
      )
      .addCase(
        fetchProfileData.rejected,
        (state, action: PayloadAction<FetchProfileError | undefined>) => {
          console.log('rejected')

          state.isLoading = false
          state.error = action.payload
        }
      )

      // updateProfileData
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined
        state.validateErrors = undefined
        state.isLoading = true
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.formData = action.payload
          state.validateErrors = undefined
          state.readonly = true
        }
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        if (
          Object.values(UpdateProfileError).includes(
            action.payload as UpdateProfileError
          )
        ) {
          state.error = action.payload as UpdateProfileError
        } else {
          state.validateErrors = action.payload as
            | ValidateProfileError[]
            | undefined
        }
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
