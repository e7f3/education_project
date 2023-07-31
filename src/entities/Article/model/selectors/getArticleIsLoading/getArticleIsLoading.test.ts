import { StateSchema } from 'app/providers/StoreProvider'

import { getArticleIsLoading } from './getArticleIsLoading'

describe('getArticleIsLoading.test', () => {
  test('Simple getArticleIsLoading.test', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    }

    expect(getArticleIsLoading(state as StateSchema)).toBe(true)
  })

  test('Empty state getArticleIsLoading.test', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleIsLoading(state as StateSchema)).toBeUndefined()
  })
})
