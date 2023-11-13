import { render, screen } from '@testing-library/react'

import { SearchContent } from './SearchContent'

describe('SearchContent ui component', () => {
  test('Appearance on screen', () => {
    render(<SearchContent>SearchContent</SearchContent>)

    screen.debug()
    expect(screen.getByTestId('search-content')).toBeInTheDocument()
  })
})
