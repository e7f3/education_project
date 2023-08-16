import { render, screen } from '@testing-library/react'

import { getFetcher } from 'pages/SpecificArticlePage/model/services/fetchArticleComments/fetchArticleComments'
import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

import { Comments } from './Comments'

describe('ArticleComments ui component', () => {
  test('Appearance on screen', () => {
    const fetchArticleComments = getFetcher('1')
    componentRender(
      <Comments fetchComments={fetchArticleComments}>ArticleComments</Comments>
    )

    screen.debug()
    expect(screen.getByTestId('comments')).toBeInTheDocument()
  })
})
