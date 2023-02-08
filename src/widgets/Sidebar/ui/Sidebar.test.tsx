import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { renderWithTranslation } 
  from 'shared/lib/testHelpers/renderWithTranslation/renderWithTranslation'
import { Sidebar } from 'widgets/Sidebar/index'

describe('Sidebar.test', () => {
  test('Simple Sidebar.test', () => {
    renderWithTranslation(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    )

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Collapse Sidebar.test', () => {
    renderWithTranslation(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    )

    const collapseButton = screen.getByTestId('sidebar-collapse-button')

    fireEvent.click(collapseButton)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
