import { fireEvent, screen } from '@testing-library/react'

import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

import { Sidebar } from './Sidebar'

describe('Sidebar.test', () => {
  test('Simple Sidebar.test', () => {
    componentRender(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Uncollapse Sidebar.test', () => {
    componentRender(<Sidebar />)

    const collapseButton = screen.getByTestId('sidebar-collapse-button')

    fireEvent.click(collapseButton)

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
