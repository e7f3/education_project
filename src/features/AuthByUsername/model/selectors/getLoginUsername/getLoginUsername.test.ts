import { StateSchema } from 'app/providers/StoreProvider'

import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('Simple getLoginUsername.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123',
      },
    }
    expect(getLoginUsername(partialState as StateSchema)).toEqual('123')
  })
  test('Empty state getLoginUsername.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(partialState as StateSchema)).toEqual('')
  })
})
