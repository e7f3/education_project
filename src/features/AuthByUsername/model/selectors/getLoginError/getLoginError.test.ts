import { StateSchema } from 'app/providers/StoreProvider'

import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
  test('Simple getLoginError.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    }
    expect(getLoginError(partialState as StateSchema)).toEqual('error')
  })

  test('Empty state getLoginError.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getLoginError(partialState as StateSchema)).toEqual('')
  })
})
