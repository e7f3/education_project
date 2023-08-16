import { StateSchema } from 'app/providers/StoreProvider'

import { getNewCommentText } from './getNewCommentText'

describe('getNewCommentText.test', () => {
  test('Simple getNewCommentText.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      newComment: {
        text: 'text',
      },
    }
    expect(getNewCommentText(partialState as StateSchema)).toEqual('text')
  })

  test('Empty state getNewCommentText.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getNewCommentText(partialState as StateSchema)).toBeUndefined()
  })
})
