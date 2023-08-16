import axios from 'axios'

import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Profile } from 'entities/Profile'
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { fetchProfileData } from './fetchProfileData'
import { FetchProfileError } from '../../types/profileSchema'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const data = {
  id: '1',
  firstname: 'John',
  lastname: 'Smith',
  username: 'user',
  age: 22,
  currency: Currency.EUR,
  country: Country.POLAND,
  city: 'Wrocław',
}

describe('fetchProfileData.test', () => {
  test('Successed fetch fetchProfileData.test', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk({ userId: '1' })

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(data)
  })

  test('Fetch with error fetchProfileData.test', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk({ userId: '1' })

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe(FetchProfileError.FETCH_SERVER_ERROR)
  })
})
