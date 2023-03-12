import { DeepPartial } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'

import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
  test('Simple getLoginIsLoading.test', () => {
    const partialState: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(partialState as StateSchema)).toEqual(true)
  })
  test('Empty state getLoginIsLoading.test', () => {
    const partialState: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(partialState as StateSchema)).toEqual(false)
  })
})
