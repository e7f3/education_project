import { render, screen } from '@testing-library/react'

import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

import { SidebarNavigation } from './SidebarNavigation'

describe('SidebarNavigation ui component', () => {
  test('Appearance on screen', () => {
    componentRender(
      <SidebarNavigation collapsed={false}>SidebarNavigation</SidebarNavigation>
    )

    screen.debug()
    expect(screen.getByTestId('sidebar-navigation')).toBeInTheDocument()
  })
})
