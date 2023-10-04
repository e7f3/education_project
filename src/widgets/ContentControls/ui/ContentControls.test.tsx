import { render, screen } from '@testing-library/react'

import { ContentControls } from './ContentControls'

describe('ContentControls ui component', () => {
  test('Appearance on screen', () => {
    render(<ContentControls>ContentControls</ContentControls>)

    screen.debug()
    expect(screen.getByText('ContentControls')).toBeInTheDocument()
  })
})
