import { StateSchema } from 'app/providers/StoreProvider'

import { getNewCommentError } from './getNewCommentError'

describe('getNewCommentError.test', () => {
  test('Simple getNewCommentError.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      newComment: {
        error: 'error',
      },
    }
    expect(getNewCommentError(partialState as StateSchema)).toEqual('error')
  })

  test('Empty state getNewCommentError.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getNewCommentError(partialState as StateSchema)).toBeUndefined()
  })
})
