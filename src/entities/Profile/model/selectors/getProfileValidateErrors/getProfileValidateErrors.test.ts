import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../types/profileSchema'

describe('getProfileValidateErrors.test', () => {
  test('Simple getProfileValidateErrors.test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INVALID_AGE],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INVALID_AGE,
    ])
  })

  test('Empty state getProfileValidateErrors.test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined()
  })
})
