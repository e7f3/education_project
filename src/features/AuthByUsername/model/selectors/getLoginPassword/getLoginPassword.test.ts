import { DeepPartial } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'

import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
  test('Simple getLoginPassword.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    }
    expect(getLoginPassword(partialState as StateSchema)).toEqual('123')
  })
  test('Empty state getLoginPassword.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(partialState as StateSchema)).toEqual('')
  })
})
