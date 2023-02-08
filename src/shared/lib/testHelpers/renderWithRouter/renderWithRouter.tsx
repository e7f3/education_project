import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export function renderWithTranslation(component: ReactNode) {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}
