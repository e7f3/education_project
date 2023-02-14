import { fireEvent, screen } from '@testing-library/react'

import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

import { Counter } from './Counter'

describe('Counter.test', () => {
  test('Simple Counter.test', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })

    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('increment Counter.test', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })

    const incrementButton = screen.getByTestId('increment-button')

    fireEvent.click(incrementButton)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('decrement Counter.test', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })

    const decrementButton = screen.getByTestId('decrement-button')

    fireEvent.click(decrementButton)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
