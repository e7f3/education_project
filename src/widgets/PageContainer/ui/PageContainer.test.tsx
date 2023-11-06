import { render, screen } from '@testing-library/react'

import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

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
    componentRender(<PageContainer>PageContainer</PageContainer>)

    screen.debug()
    expect(screen.getByTestId('page-container')).toBeInTheDocument()
  })
})
