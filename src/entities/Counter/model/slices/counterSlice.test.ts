import { counterActions, counterReducer } from './counterSlice'
import { CounterShema } from '../types/counterShema'

describe('counterSlice.test', () => {
  test('counterAction increment', () => {
    const state: CounterShema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11,
    })
  })

  test('counterAction decrement', () => {
    const state: CounterShema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9,
    })
  })

  test('counterAction with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    })
  })
})
