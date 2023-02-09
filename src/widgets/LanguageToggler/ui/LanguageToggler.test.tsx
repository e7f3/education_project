import { screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'

import { renderWithTranslation } from 'shared/lib/testHelpers/renderWithTranslation/renderWithTranslation'
import { LanguageToggler } from 'widgets/LanguageToggler/index'

describe('LanguageToggler.test', () => {
  test('Simple LanguageToggler.test', () => {
    const LanguageTogglerWithTranslation = withTranslation()(LanguageToggler)
    renderWithTranslation(<LanguageTogglerWithTranslation />)

    expect(screen.getByTestId('language-toggler')).toBeInTheDocument()
  })
})
