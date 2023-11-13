import { render, screen } from '@testing-library/react'

import { ChangeContentOrder } from './ChangeContentOrder'

describe('ChangeContentOrder ui component', () => {
  test('Appearance on screen', () => {
    render(<ChangeContentOrder>ChangeContentOrder</ChangeContentOrder>)

    screen.debug()
    expect(screen.getByTestId('change-order')).toBeInTheDocument()
  })
})
