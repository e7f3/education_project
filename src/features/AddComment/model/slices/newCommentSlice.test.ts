import { newCommentActions, newCommentReducer } from './newCommentSlice'
import { NewCommentSchema } from '../types/NewCommentSchema'

describe('newCommentSlice.test', () => {
  test('Simple newCommentSlice.test', () => {
    const partialState: DeepPartial<NewCommentSchema> = {
      isLoading: false,
      error: undefined,
      text: undefined,
    }
    expect(
      newCommentReducer(
        partialState as NewCommentSchema,
        newCommentActions.setComment('test')
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      text: 'test',
    })
  })

  test('Empty state newCommentSlice.test', () => {
    const partialState: DeepPartial<NewCommentSchema> = {}
    expect(
      newCommentReducer(
        partialState as NewCommentSchema,
        newCommentActions.setComment('test')
      )
    ).toEqual({
      text: 'test',
    })
  })
})
