import axios from 'axios'

import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Profile } from 'entities/Profile'
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { updateProfileData } from './updateProfileData'
import {
  UpdateProfileError,
  ValidateProfileError,
} from '../../types/profileSchema'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const data = {
  firstname: 'John',
  lastname: 'Smith',
  username: 'user',
  age: 22,
  currency: Currency.EUR,
  country: Country.POLAND,
  city: 'Wrocław',
}

describe('updateProfileData.test', () => {
  test('Success updateProfileData.test', async () => {
    const state: DeepPartial<StateSchema> = {
      profile: { formData: data },
    }

    const thunk = new TestAsyncThunk(updateProfileData, state)

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(data)
  })

  test('Fetch error updateProfileData.test', async () => {
    const state: DeepPartial<StateSchema> = {
      profile: { formData: data },
    }

    const thunk = new TestAsyncThunk(updateProfileData, state)

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe(UpdateProfileError.FETCH_SERVER_ERROR)
  })

  test('Validation error updateProfileData.test', async () => {
    const state: DeepPartial<StateSchema> = {
      profile: { formData: { ...data, firstname: '' } },
    }

    const thunk = new TestAsyncThunk(updateProfileData, state)

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INVALID_FIRSTNAME])
  })
})
