import { StateSchema } from 'app/providers/StoreProvider'

import { getArticleError } from './getArticleError'

const ERROR_TEXT = 'error'

describe('getArticleError.test', () => {
  test('Simple getArticleError.test', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: ERROR_TEXT,
      },
    }

    expect(getArticleError(state as StateSchema)).toBe(ERROR_TEXT)
  })

  test('Empty state getArticleError.test', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleError(state as StateSchema)).toBeUndefined()
  })
})
