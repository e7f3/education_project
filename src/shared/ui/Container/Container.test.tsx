import { render, screen } from '@testing-library/react'

import { Container } from './Container'

describe('Container ui component', () => {
  test('Appearance on screen', () => {
    render(<Container>Container</Container>)

    screen.debug()
    expect(screen.getByText('Container')).toBeInTheDocument()
  })
})
