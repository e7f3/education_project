import { render, screen } from '@testing-library/react'

import { CommentList } from './CommentList'

describe('CommentList ui component', () => {
  test('Appearance on screen', () => {
    render(<CommentList comments={[]}>CommentList</CommentList>)

    screen.debug()
    expect(screen.getByTestId('comment-list')).toBeInTheDocument()
  })
})
