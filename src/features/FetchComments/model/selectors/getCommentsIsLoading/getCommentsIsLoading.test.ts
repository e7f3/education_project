import { StateSchema } from 'app/providers/StoreProvider'

import { getCommentsIsLoading } from './getCommentsIsLoading'

describe('getCommentsIsLoading.test', () => {
  test('Simple getCommentsIsLoading.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      comments: {
        isLoading: false,
      },
    }
    expect(getCommentsIsLoading(partialState as StateSchema)).toEqual(false)
  })

  test('Empty state getCommentsIsLoading.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getCommentsIsLoading(partialState as StateSchema)).toEqual(false)
  })
})
