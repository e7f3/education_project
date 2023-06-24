import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly.test', () => {
  test('Simple getProfileReadonly.test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toBe(true)
  })

  test('Empty state getProfileReadonly.test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toBe(true)
  })
})
