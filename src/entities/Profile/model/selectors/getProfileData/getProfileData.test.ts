import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('Simple getProfileData.test', () => {
    const data = {
      firstname: 'John',
      lastname: 'Smith',
      username: 'user',
      age: 22,
      currency: Currency.EUR,
      country: Country.POLAND,
      city: 'Wrocław',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('Empty state getProfileData.test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toBeUndefined()
  })
})
