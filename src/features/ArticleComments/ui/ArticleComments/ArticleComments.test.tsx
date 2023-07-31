import { render, screen } from '@testing-library/react'

import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

import { ArticleComments } from './ArticleComments'

describe('ArticleComments ui component', () => {
  test('Appearance on screen', () => {
    componentRender(<ArticleComments id='1'>ArticleComments</ArticleComments>)

    screen.debug()
    expect(screen.getByTestId('article-comments')).toBeInTheDocument()
  })
})
