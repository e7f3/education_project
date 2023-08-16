import { render, screen } from '@testing-library/react'

import { addCommentToArticle } from 'pages/SpecificArticlePage/model/services/addCommentToArticle/addCommentToArticle'
import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

import AddCommentForm from './AddCommentForm'

describe('AddComment ui component', () => {
  test('Appearance on screen', () => {
    componentRender(<AddCommentForm onSend={addCommentToArticle} />)

    screen.debug()
    expect(screen.getByTestId('add-comment')).toBeInTheDocument()
  })
})
