import axios from 'axios'

import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { User } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { addCommentToArticle } from './addCommentToArticle'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('addCommentToArticle.test', () => {
  test('Simple addCommentToArticle.test', async () => {
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

    const partialState: DeepPartial<StateSchema> = {
      newComment: {
        text: 'some comment',
        isLoading: false,
        error: undefined,
      },
      user: {
        userAuthData: {
          id: '1',
          username: 'admin',
          avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
        },
      },
      article: {
        error: undefined,
        isLoading: false,
        data: {
          id: '1',
        },
      },
    }

    const thunk = new TestAsyncThunk(addCommentToArticle, partialState)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }))

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(thunk.api.post).toHaveBeenCalled()

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(comment)
  })

  test('Store data is incomplete addCommentToArticle.test', async () => {
    const partialState: DeepPartial<StateSchema> = {}

    const thunk = new TestAsyncThunk(addCommentToArticle, partialState)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).not.toHaveBeenCalled()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Comment was not added')
  })
})
