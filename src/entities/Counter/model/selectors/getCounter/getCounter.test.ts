import { DeepPartial } from '@reduxjs/toolkit'

import { StateShema } from 'app/providers/StoreProvider'

import { getCounter } from './getCounter'

describe('getCounter.test', () => {
  test('Simple getCounter.test', () => {
    const state: DeepPartial<StateShema> = {
      counter: {
        value: 10,
      },
    }
    expect(getCounter(state as StateShema)).toEqual({ value: 10 })
  })
})
