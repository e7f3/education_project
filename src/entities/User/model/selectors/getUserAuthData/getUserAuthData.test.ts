import type { StateSchema } from 'app/providers/StoreProvider'

import { getUserAuthData } from './getUserAuthData'

describe('getUserAuthData.test', () => {
  test('Simple getUserAuthData.test', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        userAuthData: {
          id: '1',
          username: 'admin',
        },
      },
    }
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: '1',
      username: 'admin',
    })
  })
})
