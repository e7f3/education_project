import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileFormData } from './getProfileFormData'

describe('getProfileFormData.test', () => {
  test('Simple getProfileFormData.test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        formData: {
          firstname: 'John',
          lastname: 'Smith',
        },
      },
    }
    expect(getProfileFormData(state as StateSchema)).toEqual({
      firstname: 'John',
      lastname: 'Smith',
    })
  })

  test('Empty state getProfilFormeData.test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileFormData(state as StateSchema)).toBeUndefined()
  })
})
