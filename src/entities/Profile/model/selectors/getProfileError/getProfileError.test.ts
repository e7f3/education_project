import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileError } from './getProfileError'
import { UpdateProfileError } from '../../types/profileSchema'

describe('getProfileError.test', () => {
  test('Simple getProfileError.test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: UpdateProfileError.FETCH_SERVER_ERROR,
      },
    }
    expect(getProfileError(state as StateSchema)).toBe(
      UpdateProfileError.FETCH_SERVER_ERROR
    )
  })

  test('Empty state getProfileError.test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toBe('')
  })
})
