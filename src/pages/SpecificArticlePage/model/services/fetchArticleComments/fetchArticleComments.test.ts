import axios from 'axios'

import { Comment } from 'entities/Comment'
import { User } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { getFetcher } from './fetchArticleComments'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('fetchArticleComments.test', () => {
  test('Simple fetchArticleComments.test', async () => {
    const fetchArticleComments = getFetcher('1')

    const comments: Comment[] = [
      {
        id: '1',
        text: 'some comment',
        date: '01.01.1970',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
          password: '12345678',
        } as User,
      },
      {
        id: '2',
        text: 'some comment',
        date: '01.01.1970',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
          password: '12345678',
        } as User,
      },
      {
        id: '3',
        text: 'some comment',
        date: '01.01.1970',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
          password: '12345678',
        } as User,
      },
    ]

    const thunk = new TestAsyncThunk(fetchArticleComments)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }))

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.get).toHaveBeenCalled()

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(comments)
  })

  test('Unsuccessful request fetchArticleComments.test', async () => {
    const fetchArticleComments = getFetcher('1')

    const thunk = new TestAsyncThunk(fetchArticleComments)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Comments were not found')
  })
})
