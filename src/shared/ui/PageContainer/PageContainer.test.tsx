import { render, screen } from '@testing-library/react'

import { PageContainer } from './PageContainer'

describe('PageContainer ui component', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  test('Appearance on screen', () => {
    render(<PageContainer>PageContainer</PageContainer>)

    screen.debug()
    expect(screen.getByTestId('page-container')).toBeInTheDocument()
  })
})
