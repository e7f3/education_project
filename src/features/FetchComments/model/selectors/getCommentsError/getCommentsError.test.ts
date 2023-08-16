import { StateSchema } from 'app/providers/StoreProvider'

import { getCommentsError } from './getCommentsError'

describe('getCommentsError.test', () => {
  test('Simple getCommentsError.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      comments: {
        error: 'error',
      },
    }
    expect(getCommentsError(partialState as StateSchema)).toEqual('error')
  })

  test('Empty state getCommentsError.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getCommentsError(partialState as StateSchema)).toBeUndefined()
  })
})
