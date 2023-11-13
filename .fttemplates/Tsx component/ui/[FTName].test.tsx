import { render, screen } from '@testing-library/react'

import { [FTName] } from './[FTName]'

describe('[FTName] ui component', () => {
  test('Appearance on screen', () => {
    render(<[FTName]>[FTName]</[FTName]>)

    screen.debug()
    expect(screen.getByText('[FTName]')).toBeInTheDocument()
  })
})
