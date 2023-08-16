import { render, screen } from '@testing-library/react'

import { componentRender } from 'shared/lib/testHelpers/componentRender/componentRender'

import { CommentCard } from './CommentCard'
import { Comment } from '../../model/types/comment'

const comment: Comment = {
  id: '1',
  text: 'some comment',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
  },
  date: '01.01.1970',
}

describe('CommentCard ui component', () => {
  test('Appearance on screen', () => {
    componentRender(<CommentCard comment={comment}>CommentCard</CommentCard>)

    screen.debug()
    expect(screen.getByTestId('comment-card')).toBeInTheDocument()
  })
})
