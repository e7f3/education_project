import axios from 'axios'

import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  test('Successed auth loginByUsername.test', async () => {
    const userData = { username: 'admin', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({
      username: 'admin',
      password: '12345678',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userData)
    )

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(userData)
  })

  test('Auth with error loginByUsername.test', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Invalid auth')
  })
})
