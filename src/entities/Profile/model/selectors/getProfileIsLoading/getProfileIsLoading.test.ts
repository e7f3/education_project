import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading.test', () => {
  test('Simple getProfileIsLoading.test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }
    expect(getProfileIsLoading(state as StateSchema)).toBe(true)
  })

  test('Empty state getProfileIsLoading.test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toBe(false)
  })
})
