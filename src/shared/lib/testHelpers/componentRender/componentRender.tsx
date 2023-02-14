import { DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { StateShema, StoreProvider } from 'app/providers/StoreProvider'
import i18nForTest from 'shared/config/i18n/i18nForTests'

export interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateShema>
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {}
) {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState as StateShema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
      </MemoryRouter>
    </StoreProvider>
  )
}
