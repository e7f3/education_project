import { StateSchema } from 'app/providers/StoreProvider'

import { getNewCommentIsLoading } from './getNewCommentIsLoading'

describe('getNewCommentIsLoading.test', () => {
  test('Simple getNewCommentIsLoading.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      newComment: {
        isLoading: true,
      },
    }
    expect(getNewCommentIsLoading(partialState as StateSchema)).toEqual(true)
  })

  test('Empty state getNewCommentIsLoading.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getNewCommentIsLoading(partialState as StateSchema)).toEqual(false)
  })
})
