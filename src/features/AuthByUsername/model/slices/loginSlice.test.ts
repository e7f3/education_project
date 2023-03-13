import { loginActions, loginReducer } from './loginSlice'
import { LoginSchema } from '../types/loginSchema'

describe('loginSlice.test', () => {
  test('loginAction setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    }
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('123456'))
    ).toEqual({
      username: '123456',
    })
  })

  test('loginAction setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    }
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123456'))
    ).toEqual({
      password: '123456',
    })
  })

  //   test('loginAction with empty state', () => {
  //     expect(loginReducer(undefined, loginActions.increment)).toEqual({
  //       value: 1,
  //     })
  //   })
})
