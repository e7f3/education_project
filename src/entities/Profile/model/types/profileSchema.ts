import { Currency } from 'entities/Currency'
import { Country } from 'shared/const/common'

export enum ValidateProfileError {
  'FETCH_VALIDATION_ERROR' = 'FETCH_VALIDATION_ERROR',
  'NO_DATA' = 'NO_DATA',
  'INVALID_USERNAME' = 'INVALID_USERNAME',
  'INVALID_FIRSTNAME' = 'INVALID_FIRSTNAME',
  'INVALID_LASTNAME' = 'INVALID_LASTNAME',
  'INVALID_COUNTRY' = 'INVALID_COUNTRY',
  'INVALID_CITY' = 'INVALID_CITY',
  'INVALID_AGE' = 'INVALID_AGE',
  'INVALID_CURRENCY' = 'INVALID_CURRENCY',
}

export enum UpdateProfileError {
  'FETCH_SERVER_ERROR' = 'FETCH_SERVER_ERROR',
}

export enum FetchProfileError {
  'FETCH_SERVER_ERROR' = 'FETCH_SERVER_ERROR',
}

export type ProfileError =
  | ValidateProfileError
  | UpdateProfileError
  | FetchProfileError

export interface Profile {
  firstname?: string
  lastname?: string
  age?: number
  country?: Country
  currency?: Currency
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading: boolean
  error?: ProfileError
  readonly: boolean
  validateErrors?: ValidateProfileError[]
}
