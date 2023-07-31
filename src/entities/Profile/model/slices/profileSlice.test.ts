import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { profileActions, profileReducer } from './profileSlice'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { FetchProfileError, ProfileSchema } from '../types/profileSchema'

const data = {
  firstname: 'John',
  lastname: 'Smith',
  username: 'user',
  age: 22,
  currency: Currency.EUR,
  country: Country.POLAND,
  city: 'Wrocław',
}

describe('profileSlice.test', () => {
  test('profileAction setReadonlyMode profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadonlyMode(true)
      )
    ).toEqual({
      readonly: true,
    })
  })

  test('profileAction setProfileData profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: {},
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setProfileData(data)
      )
    ).toEqual({ formData: data })
  })

  test('profileAction cancelEdit profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      formData: {},
      readonly: false,
    }

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ data, formData: data, readonly: true })
  })

  test('extraReducers fetchProfileData.pending profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
    }

    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending)
    ).toEqual({ isLoading: true })
  })

  test('extraReducers fetchProfileData.fullfilled profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled(data, '', { userId: '1' })
      )
    ).toEqual({ isLoading: false, data, formData: data })
  })

  test('extraReducers fetchProfileData.rejected profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.rejected(new Error(), '', { userId: '1' })
      )
    ).toEqual({ isLoading: false })
  })

  test('extraReducers updateProfileData.pending profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
    }

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true })
  })

  test('extraReducers updateProfileData.fullfilled profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '', { userId: '1' })
      )
    ).toEqual({ isLoading: false, data, formData: data, readonly: true })
  })

  test('extraReducers updateProfileData.rejected profileSlice.test', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.rejected(new Error(), '', { userId: '1' })
      )
    ).toEqual({ isLoading: false })
  })

  //   test('profileAction setPassword', () => {
  //     const state: DeepPartial<ProfileSchema> = {
  //       data,
  //     }
  //     expect(
  //       loginReducer(state as ProfileSchema, profileActions.setPassword('123456'))
  //     ).toEqual({
  //       password: '123456',
  //     })
  //   })

  //   test('profileAction with empty state', () => {
  //     expect(loginReducer(undefined, profileActions.increment)).toEqual({
  //       value: 1,
  //     })
  //   })
})
