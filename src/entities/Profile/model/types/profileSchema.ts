import { Currency } from 'entities/Currency'
import { Country } from 'shared/const/common'

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
  error?: string
  readonly: boolean
}
