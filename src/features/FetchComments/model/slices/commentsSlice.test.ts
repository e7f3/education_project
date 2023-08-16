import { createEntityAdapter } from '@reduxjs/toolkit'

import { Comment } from 'entities/Comment'
import { User } from 'entities/User'

import { commentsActions, commentsReducer } from './commentsSlice'
import { CommentsSchema } from '../types/commentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment) => comment.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

describe('commentsSlice.test', () => {
  test('Simple commentsSlice.test', () => {
    const partialState: DeepPartial<CommentsSchema> =
      commentsAdapter.getInitialState<CommentsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
      })
    const comment = {
      id: '1',
      text: 'some comment',
      date: '01.01.1970',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
        password: '12345678',
      } as User,
    }

    expect(
      commentsReducer(
        partialState as CommentsSchema,
        commentsActions.commentAdded(comment)
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1'],
      entities: {
        '1': comment,
      },
    })
  })
})
