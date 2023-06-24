import axios from 'axios'

import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Profile } from 'entities/Profile'
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../types/profileSchema'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const data = {
  firstname: 'John',
  lastname: 'Smith',
  username: 'user',
  age: 22,
  currency: Currency.EUR,
  country: Country.POLAND,
  city: 'Wrocław',
}

describe('validateProfileData.test', () => {
  test('Successed auth validateProfileData.test', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('incorrect firstaname and lastname validateProfileData.test', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' })
    expect(result).toEqual([
      ValidateProfileError.INVALID_FIRSTNAME,
      ValidateProfileError.INVALID_LASTNAME,
    ])
  })

  test('incorrect age validateProfileData.test', async () => {
    const result = validateProfileData({ ...data, age: undefined })
    expect(result).toEqual([ValidateProfileError.INVALID_AGE])
  })

  test('incorrect country validateProfileData.test', async () => {
    const result = validateProfileData({ ...data, country: undefined })
    expect(result).toEqual([ValidateProfileError.INVALID_COUNTRY])
  })

  test('empty data validateProfileData.test', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileError.INVALID_FIRSTNAME,
      ValidateProfileError.INVALID_LASTNAME,
      ValidateProfileError.INVALID_USERNAME,
      ValidateProfileError.INVALID_AGE,
      ValidateProfileError.INVALID_CITY,
      ValidateProfileError.INVALID_COUNTRY,
      ValidateProfileError.INVALID_CURRENCY,
    ])
  })
})
