import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileState } from './getProfileState'

describe('getProfileState.test', () => {
  test('Simple getProfileState.test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
        isLoading: true,
        data: {
          firstname: 'John',
          lastname: 'Smith',
        },
      },
    }
    expect(getProfileState(state as StateSchema)).toEqual({
      readonly: true,
      isLoading: true,
      data: {
        firstname: 'John',
        lastname: 'Smith',
      },
    })
  })

  test('Empty state getProfileState.test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileState(state as StateSchema)).toBeUndefined()
  })
})
