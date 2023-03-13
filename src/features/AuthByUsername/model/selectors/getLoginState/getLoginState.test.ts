import { StateSchema } from 'app/providers/StoreProvider'

import { getLoginState } from './getLoginState'

describe('getLoginState.test', () => {
  test('Simple getLoginState.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123',
        password: '123',
        error: 'error',
        isLoading: true,
      },
    }
    expect(getLoginState(partialState as StateSchema)).toEqual({
      username: '123',
      password: '123',
      error: 'error',
      isLoading: true,
    })
  })
  test('Empty state getLoginState.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getLoginState(partialState as StateSchema)).toEqual(undefined)
  })
})
